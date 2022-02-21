//import './App.css';
import { useTranslation } from 'react-i18next';

function ProjectDeposit() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <section className="depositInfo">
                <form className="formInputButton inputBlack input_wrap input_wrapGreen">

                    <div>
                        <input type="text" name="depositDate" value="" required></input>
                        <label>{t('depositeDate')}</label>
                    </div>

                    <div>
                        <input type="text" name="issuerName" value="" required></input>
                        <label>{t('issuerName')}</label>
                    </div>

                    <div>
                        <input type="text" name="externalProviderName" value="" required></input>
                        <label>{t('externalProviderName')}</label>
                    </div>

                </form>
            </section>

            <section>
                <h2>Section 1: Strategy and rationale</h2>

                <label>
                    <div>1.1 Please describe your Environmental Objectives as part of your overall strategy
                        and the reasoning for issuing a green bond</div>
                    <textarea name="issuerName" value=""></textarea>
                </label>

                <label>
                    <div>1.2 . Which  environmental objectives do  your Green Projects contribute to
                        (as  specified  in the EU Taxonomy Regulation)? Select all those that apply. </div>

                    <label>
                        Climate Change Mitigation:
                        <input name="objectives1" type="checkbox" />
                    </label>
                    <label>
                        Climate Change Adaptation:
                        <input name="objectives2" type="checkbox" />
                    </label>
                    <label>
                        Sustainable use and protection of water and marine resources:
                        <input name="objectives3" type="checkbox" />
                    </label>
                    <label>
                        Pollution prevention and control:
                        <input name="objectives4" type="checkbox" />
                    </label>
                    <label>
                        Protection and restoration of biodiversity and ecosystems:
                        <input name="objectives5" type="checkbox" />
                    </label>
                </label>

                <label>
                    <div> [Voluntary section] In the section below, you have the opportunity to describe whether and   where   (sources   and/or   documents)   you   have   already
                        reported   on   how   your environmental objective(s) and/or strategy relate(s) to international commitments:
                    </div>
                    <div> This may for example include publications in line with the EU Non-Financial Reporting Directive.
                        International commitments include, for example, the Paris Climate Agreement pathways or the UN Sustainable Development Goals, etc.
                    </div>
                    <textarea name="issuerName" value=""></textarea>
                </label>

                <label>
                    <div>1.4 Please record any additional information that may be relevant to this section</div>
                    <textarea name="issuerName" value=""></textarea>
                </label>

            </section>

            <section>
                <h2>Section 2: Process for selection of Green Projects</h2>

                <label>
                    <div>2.1  Please describe the governance process to ensure alignment of each Green Project with the platform objectives:
                        (1) substantial contribution to environmental objectives,
                        (2)  do-no significant harm to environmental objectives,
                        (3) minimum safeguards and where developed
                        (4) meeting the technical screening criteria (TSC).
                    </div>
                    <div>For  example,  use  of  committees,  internal/external  environmental  expertise,  exclusion  criteria,
                        eligibility principles, metrics and thresholds, methodologies, standards or certifications. Example of TSC: Acquisition of Operation
                        of Hybrid Vehicles is subject to an emissions ceiling of[“50g CO2 /km until 2025, zero emitting thereafter”]</div>
                    <textarea name="issuerName" value=""></textarea>
                </label>
                <label>
                    <div>2.2 Please record any additional information that may be relevant to this section</div>
                    <textarea name="issuerName" value=""></textarea>
                </label>
            </section>

            <section>
                <h2>Section 3: Green Projects</h2>
                <label>
                    <div>3.1   Please describe the projects / project categories financed by the green bond proceeds, the relevant economic activity under the NACE code if available. Please refer to the EU Taxonomyfor further details.
                    </div>
                    <div>For example, for the construction of wind farms, there can be several economic activities that apply. In this case, for example, the relevant activity is the production of electricity from wind power (NACE code 35.1.1).
                    </div>
                    <textarea name="issuerName" value=""></textarea>
                </label>

                <label>
                    <div>3.2 If available, please record the indicative list of Green Projects /activities financed by the green bond proceeds. If available, please supplement this information with the relative estimated proceeds allocation per Green Project category or asset class. </div>
                    <textarea name="issuerName" value=""></textarea>
                </label>

                <label>
                    <div>3.3 [Voluntary section] In the section below, you have the opportunity to describe whether the Green Projects substantially contributes directly or whether the Green Project  enables  others  (to  be  expanded  when  other  environmental  objectives  are covered)
                    </div>

                    <label>
                        Climate Change Mitigation:
                    </label>
                    <label>
                        low carbon:
                        <input name="climateMitigation1" type="checkbox" />
                    </label>
                    <label>
                        transition:
                        <input name="climateMitigation2" type="checkbox" />
                    </label>
                    <label>
                        enabling:
                        <input name="climateMitigation3" type="checkbox" />
                    </label>

                    <label>
                        Climate Change Adaptation:
                    </label>
                    <label>
                        adapting:
                        <input name="climateAdaptation1" type="checkbox" />
                    </label>
                    <label>
                        enabling:
                        <input name="climateAdaptation2" type="checkbox" />
                    </label>
                </label>


                <label>
                    <div>3.4 Please record any additional information that may be relevant to this section</div>
                    <textarea name="issuerName" value=""></textarea>
                </label>

            </section>

            <section>
                <h2>Section 4: Management of Use-of-Proceeds</h2>
                <label>
                    <div>Management of use-of-proceeds generally aligns with the approach to Management of Proceeds articulated in the Green Bond Principles. It thus entails ensuring allocations to Green Projects for an amount equivalent to the net proceeds and documenting such allocations. Furthermore,
                        the approach should fulfil the reporting and verification requirements set out elsewhere in the EU GBS.</div>
                    <textarea name="issuerName" value=""></textarea>
                </label>
            </section>

            <section className="formInputButton"> 
                <h2>Section 5: Reporting</h2>

                <label>
                    <div>5.1 Please record any additional information that may be relevant to this section
                    </div>
                    <div>For  example,  “Green  Bond  Report  to  be  published  on  our  website”.  If  you  plan  to  report  more frequently than on an annual basis, please state your reporting frequency.
                    </div>
                    <textarea name="issuerName" value=""></textarea>
                </label>

                <label>
                    <div>5.2Allocation reports will be published... </div>
                    <label>
                        Until full allocation of the proceeds of the relevant green bond
                        <input name="allocation1" type="checkbox" />
                    </label>
                    <label>
                        Until maturity of the relevant green bond
                        <input name="allocation2" type="checkbox" />
                    </label>
                </label>

                <label>
                    <div>5.3 When and at which frequencyimpact reports will be published...
                    </div>
                    <textarea name="issuerName" value=""></textarea>
                </label>

                <label>
                    <div>5.4 Please  explain  the  qualitative  and  quantitative  impact  metrics  that  will  be  used  to demonstrate  substantial  contribution  to  Environmental  Objectives  per  project  category related to the criteria for the relevant taxonomy activity.
                    </div>
                    <textarea name="issuerName" value=""></textarea>
                </label>

                <label>
                    <div>5.5 Please  explain  the  qualitative  and  quantitative  impact  metrics  that  will  be  used  to demonstrate no-significant-harm alignment per project category as defined in the relevant taxonomy activity (including any material changes).
                    </div>
                    <textarea name="issuerName" value=""></textarea>
                </label>

                <label>
                    <div>5.6 Please explain any quantitative or qualitative metrics you will use in your impact report that are supplemental to the metrics described in the EU Taxonomy and provide embedded links to relevant guidance documentation
                    </div>
                    <div>For  example,  Annual  Greenhouse  gas  emissions  reduced/avoided  in  tonnes  CO2e,  Annual Renewable Energy generation in MWh/GWh.
                    </div>
                    <textarea name="issuerName" value=""></textarea>
                </label>

                <label>
                    <div>5.7 If  available,  please  provide  an  environmental  impact  estimation  for  the  project(s) financed by the proceeds of your green bond(s).
                    </div>
                    <textarea name="issuerName" value=""></textarea>
                </label>

                <label>
                    <div>5.8 External verification will be provided for
                    </div>
                    <label>
                        each semester (voluntary):
                        <input name="climateMitigation1" type="checkbox" />
                    </label>
                    <label>
                        each annual allocation report(required):
                        <input name="climateMitigation2" type="checkbox" />
                    </label>
                    <label>
                        the final allocation report (required):
                        <input name="climateMitigation3" type="checkbox" />
                    </label>
                </label>

                <label>
                    <div>5.9  Please record any additional information that may be relevant to this section.
                    </div>
                    <textarea name="issuerName" value=""></textarea>
                </label>

            </section>
        </>
    );
}

export default ProjectDeposit;