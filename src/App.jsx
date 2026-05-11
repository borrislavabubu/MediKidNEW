const familyImage = 'https://www.figma.com/api/mcp/asset/968e2961-6c35-480b-996b-7d58ff3bcabf';
const logoImage = 'https://www.figma.com/api/mcp/asset/f376237e-aa39-4bb7-9e82-654cbf36cad0';
const arrowImage = 'https://www.figma.com/api/mcp/asset/54eb4a5e-9d62-4076-bd10-1d4fdeda4c61';

function MediKidLandingScreen() {
  return (
    <section className="medikid-frame" aria-label="MediKid landing page">
      <img className="medikid-background" src={familyImage} alt="" />

      <div className="medikid-glass-card" />

      <div className="medikid-features">
        <p className="feature-title">100% privé</p>
        <p>Vos données restent chez vous</p>

        <div className="feature-gap" />

        <p className="feature-title">Connecté à votre Drive</p>
        <p>Aucun document stocké par MediKid</p>

        <div className="feature-gap" />

        <p className="feature-title">L&apos;IA fait le tri</p>
        <p>Analyse, classement, rappels automatiques</p>
      </div>

      <img className="medikid-logo" src={logoImage} alt="medikid" />

      <h1 className="medikid-title">
        <span>LA SANTÉ DE</span>
        <span>VOS ENFANTS,</span>
      </h1>

      <p className="medikid-script">simplement.</p>

      <p className="medikid-subtitle">
        <span>Centralisez, suivez et anticipez</span>
        <span>leur santé sans charge mentale</span>
      </p>

      <button className="medikid-button" type="button">
        <span>CRÉER MON COMPTE</span>
        <img src={arrowImage} alt="" />
      </button>

      <a className="medikid-login" href="#">
        Déjà un compte?
      </a>
    </section>
  );
}

export default function App() {
  return (
    <main className="app-shell">
      <MediKidLandingScreen />
    </main>
  );
}
