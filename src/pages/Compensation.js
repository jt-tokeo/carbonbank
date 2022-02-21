import '../css/compensation.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Compensation() {
    return (
        <main>
            <section className="compensation sectionCenter">
                <h2>La compensation carbone</h2>
                <p className="pAcrroche">La compensation carbone consiste à financer un projet dont l’activité permet d’éviter des émissions de . Ce financement s’effectue via l’achat de crédits carbone. Utilisable par tous, entreprises, collectivités territoriales ou simples citoyens, la compensation carbone ne s’envisage qu’à l’issue d’actions de réduction de sa propre empreinte carbone ! Elle répond à des règles méthodologiques strictes.</p>
            </section>

            <section className="compensationPrincipe sectionCenter">
                <h5>Le Principe</h5>
                <article>
                    <p>Le principe sous-jacent de la compensation carbone est que les impacts d’une tonne de carbone émise quelque part peuvent être neutralisés par la séquestration
                        Stockage à long terme du CO2 hors de l'atmosphère (foret, océan, etc) voir le glossaire ou la réduction d’une autre tonne de carbone ailleurs.</p>
                    <p>Chaque tonne de GES évitée par un projet de compensation, exprimée en Tonne d’équivalent CO2
                        Unité de mesure commune à tous les gaz à effet de serre voir le glossaire (TéqCO2) est certifiée par la délivrance d’un crédit carbone.
                    </p>
                    <p>Les particuliers, entreprises, collectivités, ou évènements peuvent volontairement compenser tout ou une partie des émissions qu’ils n’ont pas pu réduire en achetant ces crédits carbone
                        Unité correspondant à une TéqCO2 évitéee sur un projet de compensation. voir le glossaire.</p>
                </article>
                <div>
                    <p>La compensation carbone</p>
                </div>
            </section>

            <section className="compensationRule sectionCenter">
                <h5>LA COMPENSATION CARBONE RÉPOND À DES RÈGLES TRÈS STRICTE</h5>
                <article>
                    <p className="pAcrroche">La mesurabilité</p>
                    <p>les émissions de GES évitées doivent être comptabilisées sur la base d’une méthodologie
                        Méthode de calcul des économies de GES réalisées grâce au projet. Elle est approuvée par un tiers indépendant.
                        voir le glossaire validée par un tiers indépendant.</p>
                    <p className="pAcrroche">La vérifiabilité</p>
                    <p>un auditeur indépendant vérifie annuellement les économies de GES réalisée sur le projet.</p>
                    <p className="pAcrroche">La permanence</p>
                    <p>les émissions de GES doivent être évitées pendant au moins 7 ans.</p>
                    <p className="pAcrroche">L’additionnalité</p>
                    <p>le projet doit permettre d’éviter des émissions de GES par rapport à une situation de référence. Le porteur du projet doit également prouver que sans le revenu issu de la vente des crédits carbone, son projet n’aurait pas pu être mis en œuvre.</p>
                </article>
            </section>
        </main>
    );
}

export default Compensation;