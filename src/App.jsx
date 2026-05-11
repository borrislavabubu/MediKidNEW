import { useState } from 'react';

const familyImage = 'https://www.figma.com/api/mcp/asset/968e2961-6c35-480b-996b-7d58ff3bcabf';
const landingLogoImage = 'https://www.figma.com/api/mcp/asset/f376237e-aa39-4bb7-9e82-654cbf36cad0';
const landingArrowImage = 'https://www.figma.com/api/mcp/asset/54eb4a5e-9d62-4076-bd10-1d4fdeda4c61';

const signInLogoImage = 'https://www.figma.com/api/mcp/asset/598e41df-9e30-4d5e-93e2-cd1dd3630578';
const appleLogoImage = 'https://www.figma.com/api/mcp/asset/2cb2ea56-f698-4d0f-9e6d-6741341365f4';
const googleLogoImage = 'https://www.figma.com/api/mcp/asset/fe32af97-12f6-47d6-9993-40c295e57a62';
const signInArrowImage = 'https://www.figma.com/api/mcp/asset/cef5e838-b602-43c5-a546-07e54277eedd';

const addChildLogoImage = 'https://www.figma.com/api/mcp/asset/4f12d535-416f-466b-bb19-a4d43ad2be5f';

const connectLogoImage = 'https://www.figma.com/api/mcp/asset/23768e1b-4859-4042-b062-2e889d0d6575';
const connectGoogleLogoImage = 'https://www.figma.com/api/mcp/asset/63e75f25-b180-4c02-8ce7-372497e4f0d1';
const iCloudLogoImage = 'https://www.figma.com/api/mcp/asset/5cc01a79-622a-4fcf-a384-502b3491decb';
const shieldCheckImage = 'https://www.figma.com/api/mcp/asset/bfdffb86-d160-4fe2-bed0-332de2ecf091';

function LandingPage({ onSignIn }) {
  return (
    <section className="medikid-frame landing-page" aria-label="MediKid landing page">
      <img className="landing-background" src={familyImage} alt="" />

      <div className="landing-glass-card" />

      <div className="landing-features">
        <p className="feature-title">100% privé</p>
        <p>Vos données restent chez vous</p>

        <div className="feature-gap" />

        <p className="feature-title">Connecté à votre Drive</p>
        <p>Aucun document stocké par MediKid</p>

        <div className="feature-gap" />

        <p className="feature-title">L&apos;IA fait le tri</p>
        <p>Analyse, classement, rappels automatiques</p>
      </div>

      <img className="landing-logo" src={landingLogoImage} alt="medikid" />

      <h1 className="landing-title">
        <span>LA SANTÉ DE</span>
        <span>VOS ENFANTS,</span>
      </h1>

      <p className="landing-script">simplement.</p>

      <p className="landing-subtitle">
        <span>Centralisez, suivez et anticipez</span>
        <span>leur santé sans charge mentale</span>
      </p>

      <button className="landing-button" type="button" onClick={onSignIn}>
        <span>CRÉER MON COMPTE</span>
        <img src={landingArrowImage} alt="" />
      </button>

      <button className="landing-login" type="button" onClick={onSignIn}>
        Déjà un compte?
      </button>
    </section>
  );
}

function SignInPage({ onAddChild }) {
  return (
    <section className="medikid-frame signin-page" aria-label="MediKid sign in page">
      <img className="signin-logo" src={signInLogoImage} alt="medikid" />

      <p className="signin-tagline">Votre secrétaire médical privé</p>

      <div className="signin-divider" aria-hidden="true">
        <span />
        <p>Connexion rapide</p>
        <span />
      </div>

      <button className="social-button google-button" type="button" onClick={onAddChild}>
        <img src={googleLogoImage} alt="" />
        <span>Continuer avec Google</span>
      </button>

      <button className="social-button apple-button" type="button" onClick={onAddChild}>
        <img src={appleLogoImage} alt="" />
        <span>Continuer avec Apple</span>
      </button>

      <p className="email-separator">ou par email</p>

      <label className="field-label email-label" htmlFor="signin-email">
        Adresse email
      </label>
      <input className="signin-field email-field" id="signin-email" type="email" placeholder="votre e-mail" />

      <label className="field-label password-label" htmlFor="signin-password">
        Mot de passe
      </label>
      <input
        className="signin-field password-field"
        id="signin-password"
        type="password"
        placeholder="***********"
      />

      <button className="signin-button" type="button" onClick={onAddChild}>
        <span>CRÉER MON COMPTE</span>
        <img src={signInArrowImage} alt="" />
      </button>

      <a className="forgot-password" href="#">
        Mot de passe oublié?
      </a>

      <div className="signin-account-row">
        <span>Déjà un compte?</span>
        <a href="#">Se connecter</a>
      </div>

      <p className="signin-terms">
        En continuant, vous acceptez nos CGU
        <br />
        Vos données restent dans votre Drive
      </p>
    </section>
  );
}

function AddChildPage({ onContinue }) {
  return (
    <section className="medikid-frame add-child-page" aria-label="Ajouter un enfant">
      <img className="add-child-logo" src={addChildLogoImage} alt="medikid" />

      <div className="add-child-progress" aria-label="Étape 1 sur 4">
        <span className="add-progress-line" />
        <span className="add-progress-dot muted" />
        <span className="add-progress-dot muted" />
        <span className="add-progress-dot muted" />
        <span className="add-progress-text">1 sur 4</span>
      </div>

      <h1 className="add-child-title">Pour qui est ce dossier ?</h1>

      <p className="add-child-subtitle">
        <span>Ajoutez votre enfant pour créer</span>
        <span>son espace santé privé.</span>
      </p>

      <div className="photo-section">
        <button className="photo-placeholder" type="button" aria-label="Ajouter une photo">
          <span>+</span>
        </button>
        <p className="photo-action">Ajouter une photo</p>
        <p className="photo-note">Optionnel</p>
      </div>

      <div className="add-child-form">
        <label className="add-child-label" htmlFor="child-first-name">
          Prénom de l’enfant
        </label>
        <input className="add-child-input" id="child-first-name" type="text" />

        <label className="add-child-label birth-label" htmlFor="child-birth-date">
          Date de naissance
        </label>
        <input className="add-child-input" id="child-birth-date" type="text" />

        <label className="add-child-label doctor-label" htmlFor="child-doctor">
          Médecin traitant
        </label>
        <input className="add-child-input" id="child-doctor" type="text" />
        <p className="doctor-note">Optionnel, vous pourrez le compléter plus tard.</p>
      </div>

      <button className="add-child-primary" type="button" onClick={onContinue}>
        CONTINUER
      </button>

      <button className="add-child-secondary" type="button" onClick={onContinue}>
        Passer pour l’instant
      </button>
    </section>
  );
}

function ConnectCloudPage() {
  return (
    <section className="medikid-frame connect-cloud-page" aria-label="Connectez votre cloud">
      <img className="connect-cloud-logo" src={connectLogoImage} alt="medikid" />

      <div className="connect-progress" aria-label="Étape 2 sur 4">
        <span className="progress-dot" />
        <span className="progress-line" />
        <span className="progress-dot muted" />
        <span className="progress-dot muted" />
        <span className="progress-text">2 sur 4</span>
      </div>

      <h1 className="connect-title">Connectez votre cloud</h1>

      <p className="connect-intro">
        <span>Vos documents médicaux restent</span>
        <span>dans votre Drive.</span>
        <span>MediKid organise seulement</span>
        <span>les dossiers et les informations utiles.</span>
      </p>

      <div className="cloud-card google-drive-card">
        <img className="cloud-icon google-drive-icon" src={connectGoogleLogoImage} alt="" />
        <p className="cloud-title">Google Drive</p>
        <p className="cloud-description">
          <span>Active la création automatique</span>
          <span>du dossier MediKid.</span>
        </p>
        <span className="cloud-badge recommended-badge">Recommandé</span>
        <button className="cloud-connect-button" type="button">
          Connecter Google Drive
        </button>
      </div>

      <div className="cloud-card icloud-card">
        <img className="cloud-icon icloud-icon" src={iCloudLogoImage} alt="" />
        <p className="cloud-title">iCloud</p>
        <p className="cloud-description">
          <span>Vos documents resteront</span>
          <span>dans votre iCloud.</span>
        </p>
        <span className="cloud-badge soon-badge">Bientôt disponible</span>
      </div>

      <img className="privacy-shield" src={shieldCheckImage} alt="" />
      <p className="privacy-title">100% privé</p>
      <p className="privacy-copy">Aucun fichier médical stocké par MediKid.</p>

      <button className="connect-continue-button" type="button">
        CONTINUER
      </button>

      <button className="connect-later-button" type="button">
        Je connecterai plus tard
      </button>
    </section>
  );
}

export default function App() {
  const [screen, setScreen] = useState('landing');

  const goToSignIn = () => setScreen('signin');
  const goToAddChild = () => setScreen('add-child');
  const goToConnectCloud = () => setScreen('connect-cloud');

  return (
    <main className="app-shell">
      {screen === 'landing' && <LandingPage onSignIn={goToSignIn} />}
      {screen === 'signin' && <SignInPage onAddChild={goToAddChild} />}
      {screen === 'add-child' && <AddChildPage onContinue={goToConnectCloud} />}
      {screen === 'connect-cloud' && <ConnectCloudPage />}
    </main>
  );
}
