import React, { useContext, useEffect, useState } from 'react';
import * as nearAPI from "near-api-js";
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Container, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar } from '@mui/material';
import { AccountCircle, People } from '@mui/icons-material';
import DataContext from '../../../context/ContextConnection';
import logocarbon from '../../../media/img/logo-carbon.png';




const MenuHorizontal = (props) => {

    const {
        connectNear,
        disconnectNear,
        initiateNearConnection,
        metadataContract,
        near,
        nearAddress, setNearAddress,
        registerTCCAccount,
        TCCBalance, setTCCBalance,
        TCCContract,
        walletBalance, setWalletBalance,
        walletConn,
        setUser } = useContext(DataContext);
    const navigate = useNavigate();
    let hasstorage = null;

    function handleLangChange(event) {
        props.i18n.changeLanguage(event.target.value);

    }

    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState('')
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOpen('');
    };

    function disconnect(event) {
        event.preventDefault();
        setUser({});
        disconnectNear();
        localStorage.clear();
        navigate('/');
    }
    const formatAmount = (amount) => {
        let stringAmount = amount.toString();
        //No change
        if (stringAmount.includes('.') && stringAmount.split('.')[1].length < 5) return amount;

        //return 185.5789
        if (stringAmount.includes('.') && stringAmount.split('.')[1].length > 5) return stringAmount.split('.')[0] + "." + stringAmount.split('.')[1].slice(0, 4);
        let newAmount = "";
        newAmount = stringAmount.slice(0, 7) + "....";
        return newAmount;
    }

    /** GET TCC from API */
    const getTCC = async () => {
        let res = await fetch('http://51.75.13.164:3456/mint/' + nearAddress, { method: "POST" });
        let status = res.status;
        res.json()
        .then(async (result) => {
            console.log(result);
            /** Actualize balance when TCC received */
            const ft_balance = await TCCContract.ft_balance_of({ account_id: walletConn.getAccountId() });
            setTCCBalance(formatTokenAmount(ft_balance, metadataContract.decimals));
        })
        .catch(error => {
            console.error(error)
        })
    }

    /** Format TCC amount */
    const trimTrailingZeros = (nstr) => {
        let str = nstr;
        while (str.endsWith("0")) {
            str = str.substr(0, str.length - 1);
        }
        return str;
    }
    /** Format TCC amount */
    const formatTokenAmount = (amount,decimals) => {
        let biamount = amount;
        let exponent = 10**decimals;
        let intpart = (biamount / exponent).toString();
        let fractpart = (biamount % exponent).toString().padStart(decimals,"0");
        fractpart = trimTrailingZeros(fractpart);
        let finalstr = intpart;
        if(fractpart.length > 0){
            finalstr = finalstr+"."+fractpart;
        }
        return finalstr;
    }

    useEffect(async () => {
        if (walletConn && near && TCCContract) {
            /** Check if User is connected to Near */
            if (walletConn.isSignedIn()) {
                /** Get wallet address */
                const address = await near.account(walletConn.getAccountId());
                setNearAddress(address.accountId);
                /** Get wallet balance */
                const balance = (await address.state()).amount;
                setWalletBalance(nearAPI.utils.format.formatNearAmount(balance))
                /** Check if User has TCC's balance */
                hasstorage = await TCCContract.storage_balance_of({ account_id: walletConn.getAccountId() });
                if (hasstorage) {
                    /** Get TCC User's balance */
                    const ft_balance = await TCCContract.ft_balance_of({ account_id: walletConn.getAccountId() });
                    setTCCBalance(formatTokenAmount(ft_balance, metadataContract.decimals));
                }

            }
        }

    }, [walletConn, near, TCCContract, metadataContract])

    useEffect(() => {
        initiateNearConnection()
    }, [])

    return (
        <AppBar
            position='fixed'
            sx={{ backgroundColor: 'white' }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        component="img"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, height: '5vh' }}
                        alt="LOGO"
                        src={logocarbon}
                    />

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        {walletBalance && <Button
                            sx={{ mr: 1, color: 'white', backgroundColor: '#3ED17D', '&:hover': { backgroundColor: '#065729', color: 'white' }, borderRadius: '15px' }}
                            onClick={TCCBalance ? getTCC : registerTCCAccount}
                        >{TCCBalance ? 'Faucet +50 TCC' : 'Register TCC'}</Button>}

                        <Button
                            sx={{ mr: 1, color: 'white', backgroundColor: '#3ED17D', '&:hover': { backgroundColor: '#065729', color: 'white' }, borderRadius: '15px' }}
                            onClick={!walletBalance ? connectNear : disconnectNear}
                        >{nearAddress}</Button>

                        {walletBalance && <Button
                            sx={{ mr: 1, color: 'white', backgroundColor: '#3ED17D', '&:hover': { backgroundColor: '#065729', color: 'white' }, borderRadius: '15px' }}
                        >{'Balance ' + formatAmount(walletBalance) + ' NEAR'}</Button>}

                        <ListItemIcon sx={{ minWidth: '10px', mr: 1, pt: 0.5 }}>
                            <People />
                        </ListItemIcon>
                        <ListItemText
                            primary="Jean2000"
                            sx={{ color: "black", pt: 0.5 }}
                        />


                        <IconButton
                            sx={{ mr: 1, ml: 1 }}
                            aria-controls={open === 'profile' ? 'profile' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open === 'profile' ? 'true' : undefined}
                            onClick={(event) => { handleClick(event); setOpen('profile') }}
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id={'profile'}
                            anchorEl={anchorEl}
                            open={open === 'profile' ? true : false}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}>
                            <MenuItem
                                disabled
                                // onClick={}
                                sx={{ color: 'black' }}
                            >Jean Mille</MenuItem>
                            <Divider />
                            <MenuItem><Link to="/" onClick={disconnect}>{props.t('disconnect')}</Link></MenuItem>
                        </Menu>

                        {/* <Select
                            size='small'
                            name="lang"
                            value={i18n.language}
                            onChange={handleLangChange}
                            sx={{ backgroundColor: '#2a836e', color: 'white'}}
                        >
                            <MenuItem sx={{backgroundColor: '#3ED17D'}} value="en">en</MenuItem>
                            <MenuItem sx={{backgroundColor: '#3ED17D'}} value="fr">fr</MenuItem>
                        </Select> */}

                        <select className="select00" name="lang" value={props.i18n.language} onChange={handleLangChange}>
                            <option className="langEng" value="en">en</option>
                            <option className="langFr" value="fr">fr</option>
                        </select>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default MenuHorizontal;