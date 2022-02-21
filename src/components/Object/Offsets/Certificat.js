import { Button, Modal, Box } from '@mui/material';
import React, { useState } from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

/** img */
import logoComite from '../../../media/img/logoComite.png'
import logo from '../../../media/img/LogoNouvelle-Aquitaine.png'
import sign from '../../../media/img/sign.png'
import env from '../../../media/img/certificate.png'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height: '92%',
    bgcolor: '#F7F7F7',
    border: '9px solid #c31231',
    boxShadow: 24,
    p: 4,
    overflow: 'auto',
  };

/**
 * Certificate for all buy Offsets
 * 
 * @param {Date} props.date It's the creation date of the certificate
 * @param {Number} props.co2 It's the number co2 compensate
 * @param {Text} props.user It's the user who have compensate
 * @param {Text} props.nft It's the user who have compensate
 */
const Certificat = (props) => {
    const [open, setOpen] = useState(false)
    return (
            <>
                <Button
                    size='small'
                    sx={{ color: 'white', backgroundColor: '#3ED17D', '&:hover': { backgroundColor: 'white !important', color: '#3ED17D' }, borderRadius: '15px' }}
                    endIcon={<ArrowCircleUpIcon />}
                    onClick={() => setOpen(true)}
                >certificate</Button>
                <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                    <div className='certificate-header'>
                        <img src={logoComite} alt="" />
                        <div>
                            <p>{props.date}</p>
                            <p>Value: {props.co2} ton(s) of CO2 equivalent</p>
                            <p>Issued to {props.user}</p>
                        </div>
                    </div>
                    <div className='certificate-content'>
                    <img src={env} alt="view" />
                        <p>By participating in voluntary offsetting, you are now a player in the fight against climate change. Thanks to you, the projects supported by CIENA will make it possible to reduce the greenhouse gases responsible for global warming. We congratulate you for his responsible and civic-minded gesture that shows your awareness and your willingness to act. Offsetting is not the only solution, continue to act on a daily basis by reducing your emissions and become a sustainable tourism tourism ambassador by supporting and promoting the New-Aquitaine Green Guest card.</p>
                        <p>Thank you for your support </p>
                    </div>
                    <div className='certificate-footer'>
                        <p>{props.nft}</p>
                        <img className='new-aqui' src={logo} alt="" />
                        <img className='sign' src={sign} alt="" />
                    </div>
                    </Box>
                </Modal>
            </>
        )
};

export default Certificat;