import { useState } from 'react';
import googleDriveIcon from './assets/Google_Drive_icon_(2020).svg';
import shieldCheckIcon from './assets/shield-check1.svg';
import dentistIcon from './assets/dentist-icon.svg';
import eyeIcon from './assets/eye-icon.svg';

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
const scanLogoImage = 'https://www.figma.com/api/mcp/asset/b9dc3132-e91a-477e-be78-355353718128';
const scanIconImage = 'https://www.figma.com/api/mcp/asset/9d99c0e4-e706-48eb-84bd-d42fbb2f80fc';
const importIconImage = 'https://www.figma.com/api/mcp/asset/d0d97887-5ee5-46ef-bd7c-4a38f60bfc0c';
const cloudIconImage = 'https://www.figma.com/api/mcp/asset/7bb794b8-65bd-4bc8-b9ff-8376537ac091';
const botIconImage = 'https://www.figma.com/api/mcp/asset/ec3d3efa-c221-4fd2-a91f-7b761dc87bec';
const analyzeLogoImage = 'https://www.figma.com/api/mcp/asset/68a822c6-68c2-46bd-ab7e-2fab7ac10a36';
const analyzeCheckIconImage = 'https://www.figma.com/api/mcp/asset/c6a6d1cc-8d70-4fa5-800a-5d3cfa1ec996';
const analyzeLoaderIconImage = 'https://www.figma.com/api/mcp/asset/b8def988-7cf8-4c76-a730-0bc67ca0f16f';
const spaceReadyLogoImage = 'https://www.figma.com/api/mcp/asset/94e67785-f991-4cd7-8b7a-1ee0cc4ec383';
const spaceReadyArrowImage = 'https://www.figma.com/api/mcp/asset/4754c11b-404c-4240-a3d0-8c32b4963691';
const spaceReadyUserIconImage = 'https://www.figma.com/api/mcp/asset/9299eb7c-850f-4841-a692-60d8ef32a252';
const spaceReadyCloudIconImage = 'https://www.figma.com/api/mcp/asset/8addc45e-ca1a-40b4-bdff-afc38e079a59';
const spaceReadyDocumentIconImage = 'https://www.figma.com/api/mcp/asset/bce1e3ca-4d8d-4ccd-913c-44f4bd0f18d1';
const spaceReadyGrowthIconImage = 'https://www.figma.com/api/mcp/asset/bbedb773-a917-4f32-9d87-3483cb5b6182';
const dashboardCalendarIcon = 'https://www.figma.com/api/mcp/asset/4bf275a4-dd17-400d-8e02-7a0d688748af';
const dashboardBellIcon = 'https://www.figma.com/api/mcp/asset/fbd97900-d493-4ec4-882e-8e01d1c3c827';
const dashboardMailIcon = 'https://www.figma.com/api/mcp/asset/3f5a32fc-7b11-4846-ad1e-77f2b6b8a769';
const dashboardChildPhoto = 'https://www.figma.com/api/mcp/asset/771ad697-38aa-4f30-8927-0a393133ad8e';
const dashboardQrIcon = 'https://www.figma.com/api/mcp/asset/76c9fcd3-2ac1-438e-a299-f60b9bc45d09';
const dashboardShieldIcon = 'https://www.figma.com/api/mcp/asset/2498f0a2-85fd-4e34-8d3d-0390f05aab9a';
const dashboardDoctolibIcon = 'https://www.figma.com/api/mcp/asset/db4b5d39-0785-4ad6-1d6678e9bee6';

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

function ConnectCloudPage({ onContinue }) {
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
        <img className="cloud-icon google-drive-icon" src={googleDriveIcon} alt="" />
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
        <span className="cloud-icon icloud-icon" aria-hidden="true">☁</span>
        <p className="cloud-title">iCloud</p>
        <p className="cloud-description">
          <span>Vos documents resteront</span>
          <span>dans votre iCloud.</span>
        </p>
        <span className="cloud-badge soon-badge">Bientôt disponible</span>
      </div>

      <img className="privacy-shield" src={shieldCheckIcon} alt="" />
      <p className="privacy-title">100% privé</p>
      <p className="privacy-copy">Aucun fichier médical stocké par MediKid.</p>

      <button className="connect-continue-button" type="button" onClick={onContinue}>
        CONTINUER
      </button>

      <button className="connect-later-button" type="button" onClick={onContinue}>
        Je connecterai plus tard
      </button>
    </section>
  );
}

function AddDocumentPlaceholderPage() {
  return (
    <section className="medikid-frame add-document-placeholder-page" aria-label="Ajouter un document">
      <img className="placeholder-logo" src={connectLogoImage} alt="medikid" />
      <div className="placeholder-card">
        <p>Ajouter un document à créer</p>
      </div>
    </section>
  );
}

function ScanDocumentPage({ onContinue }) {
  return (
    <section className="medikid-frame scan-document-page" aria-label="Scannez un document">
      <img className="scan-document-logo" src={scanLogoImage} alt="medikid" />

      <div className="scan-progress" aria-label="Étape 3 sur 4">
        <span className="scan-progress-dot active" />
        <span className="scan-progress-dot active" />
        <span className="scan-progress-line" />
        <span className="scan-progress-dot muted" />
        <span className="scan-progress-text">3 sur 4</span>
      </div>

      <h1 className="scan-document-title">
        <span>Ajoutez un premier</span>
        <span>document</span>
      </h1>

      <p className="scan-document-subtitle">
        <span>L&apos;IA pourra extraire les informations</span>
        <span>utiles : dates, médecin, taille, poids,</span>
        <span>ordonnance ou vaccin.</span>
      </p>

      <div className="scan-main-card">
        <img className="scan-main-icon" src={scanIconImage} alt="" />
        <p className="scan-main-title">Scanner un document</p>
        <p className="scan-main-copy">Prenez une photo avec votre téléphone</p>
        <button className="scan-main-button" type="button" onClick={onContinue}>
          Scanner un document
        </button>
      </div>

      <button className="scan-option-card import-option-card" type="button">
        <span className="scan-option-icon-circle">
          <img className="scan-import-icon" src={importIconImage} alt="" />
        </span>
        <span className="scan-option-title">Importer un PDF ou une image</span>
        <span className="scan-option-copy">Fichier reçu par email ou téléchargé</span>
      </button>

      <button className="scan-option-card drive-option-card" type="button">
        <span className="scan-option-icon-circle">
          <img className="scan-drive-icon" src={cloudIconImage} alt="" />
        </span>
        <span className="scan-option-title">Choisir depuis le Drive</span>
        <span className="scan-option-copy">
          <span>Documents déjà présents dans</span>
          <span>votre Google Drive</span>
        </span>
      </button>

      <div className="scan-ai-block">
        <img className="scan-ai-icon" src={botIconImage} alt="" />
        <p className="scan-ai-title">L&apos;IA fait le tri</p>
        <p className="scan-ai-copy">
          <span>Analyse, classe et prépare les rappels</span>
          <span>automatiquement.</span>
          <span>Le fichier reste dans votre Drive.</span>
        </p>
      </div>
    </section>
  );
}

function AnalyzeDocumentPage({ onContinue }) {
  return (
    <section className="medikid-frame analyze-document-page" aria-label="Analyse du document">
      <img className="analyze-document-logo" src={analyzeLogoImage} alt="medikid" />

      <div className="analyze-progress" aria-label="Étape 4 sur 4">
        <span className="analyze-progress-dot active" />
        <span className="analyze-progress-dot active" />
        <span className="analyze-progress-dot active" />
        <span className="analyze-progress-line" />
        <span className="analyze-progress-text">4 sur 4</span>
      </div>

      <h1 className="analyze-document-title">Analyse du document...</h1>

      <div className="analyze-card">
        <div className="analyze-row analyze-row-one">
          <span className="analyze-icon-circle">
            <img className="analyze-check-icon" src={analyzeCheckIconImage} alt="" />
          </span>
          <span className="analyze-row-text">Document détecté</span>
        </div>

        <div className="analyze-divider analyze-divider-one" />

        <div className="analyze-row analyze-row-two">
          <span className="analyze-icon-circle">
            <img className="analyze-check-icon" src={analyzeCheckIconImage} alt="" />
          </span>
          <span className="analyze-row-text">Type : Certificat médical</span>
        </div>

        <div className="analyze-divider analyze-divider-two" />

        <div className="analyze-row analyze-row-three">
          <span className="analyze-icon-circle">
            <img className="analyze-loader-icon" src={analyzeLoaderIconImage} alt="" />
          </span>
          <span className="analyze-row-text loading">Lecture des informations utiles...</span>
        </div>
      </div>

      <button className="analyze-result-button" type="button" onClick={onContinue}>
        VOIR LE RÉSULTAT
      </button>
    </section>
  );
}

function DocumentAnalyzedPage({ onConfirm }) {
  return (
    <section className="medikid-frame document-analyzed-page" aria-label="Document analysé">
      <img className="document-analyzed-logo" src={analyzeLogoImage} alt="medikid" />

      <div className="document-analyzed-progress" aria-label="Étape 4 sur 4">
        <span className="document-analyzed-progress-dot active" />
        <span className="document-analyzed-progress-dot active" />
        <span className="document-analyzed-progress-dot active" />
        <span className="document-analyzed-progress-line" />
        <span className="document-analyzed-progress-text">4 sur 4</span>
      </div>

      <h1 className="document-analyzed-title">
        DOCUMENT ANALYSÉ
        <span className="document-analyzed-title-check" aria-hidden="true">✓</span>
      </h1>

      <div className="document-result-card">
        <p className="document-result-heading">CERTIFICAT MÉDICAL</p>
        <p className="document-result-location">12 mai 2025 · Google Drive / MediKid / Lucas</p>

        <p className="document-info-heading">Informations trouvées</p>

        <div className="document-table-row document-row-type">
          <span className="document-table-label">TYPE</span>
          <span className="document-table-value">Certificat médical</span>
        </div>
        <div className="document-row-divider document-divider-one" />

        <div className="document-table-row document-row-date">
          <span className="document-table-label">DATE</span>
          <span className="document-table-value">12 mai 2025</span>
        </div>
        <div className="document-row-divider document-divider-two" />

        <div className="document-table-row document-row-doctor">
          <span className="document-table-label">MÉDECIN</span>
          <span className="document-table-value">Dr Mercier</span>
        </div>
        <div className="document-row-divider document-divider-three" />

        <div className="document-table-row document-row-height">
          <span className="document-table-label">TAILLE</span>
          <span className="document-table-value">128 cm</span>
        </div>
        <div className="document-row-divider document-divider-four" />

        <div className="document-table-row document-row-weight">
          <span className="document-table-label">POIDS</span>
          <span className="document-table-value">26,4 kg</span>
          <span className="document-check-badge">à vérifier</span>
        </div>
      </div>

      <div className="document-actions-card">
        <p className="document-action-line document-action-one">
          <span className="document-action-icon" aria-hidden="true">✓</span>
          Ajouté au suivi de croissance
        </p>
        <p className="document-action-line document-action-two">
          <span className="document-action-icon" aria-hidden="true">✓</span>
          Classé dans Documents médicaux
        </p>
        <p className="document-action-line document-action-three">
          <span className="document-action-icon" aria-hidden="true">!</span>
          Rappel possible détecté
        </p>
      </div>

      <button className="document-confirm-button" type="button" onClick={onConfirm}>
        CONFIRMER
      </button>

      <button className="document-edit-button" type="button">
        Modifier
      </button>

      <button className="document-delete-button" type="button">
        Supprimer
      </button>
    </section>
  );
}

function SpaceReadyPage({ onDashboard }) {
  return (
    <section className="medikid-frame space-ready-page" aria-label="Votre espace est prêt">
      <img className="space-ready-logo" src={spaceReadyLogoImage} alt="medikid" />

      <h1 className="space-ready-title">
        <span>Votre espace</span>
        <span>MediKid est prêt</span>
      </h1>

      <p className="space-ready-subtitle">
        <span>Lucas a maintenant son dossier santé privé.</span>
        <span>Vous pouvez ajouter d&apos;autres documents,</span>
        <span>inviter un parent ou compléter son profil plus tard.</span>
      </p>

      <div className="space-status-card space-status-child">
        <img className="space-status-icon user" src={spaceReadyUserIconImage} alt="" />
        <p>Lucas ajouté</p>
      </div>

      <div className="space-status-card space-status-drive">
        <img className="space-status-icon cloud" src={spaceReadyCloudIconImage} alt="" />
        <p>Drive connecté</p>
      </div>

      <div className="space-status-card space-status-document">
        <img className="space-status-icon document" src={spaceReadyDocumentIconImage} alt="" />
        <p>1 document analysé</p>
      </div>

      <div className="space-status-card space-status-growth">
        <img className="space-status-icon growth" src={spaceReadyGrowthIconImage} alt="" />
        <p>
          <span>Suivi de</span>
          <span>croissance activé</span>
        </p>
      </div>

      <button className="space-action-row space-action-document" type="button">
        <span>Ajouter un autre document</span>
        <img src={spaceReadyArrowImage} alt="" />
      </button>

      <button className="space-action-row space-action-child" type="button">
        <span>Ajouter un enfant</span>
        <img src={spaceReadyArrowImage} alt="" />
      </button>

      <button className="space-action-row space-action-parent" type="button">
        <span>Inviter un parent</span>
        <img src={spaceReadyArrowImage} alt="" />
      </button>

      <button className="space-dashboard-button" type="button" onClick={onDashboard}>
        ALLER AU TABLEAU DE BORD
      </button>
    </section>
  );
}

function DashboardPage() {
  return (
    <section className="medikid-frame dashboard-page" aria-label="Tableau de bord MediKid">
      <header className="dashboard-header">
        <button className="dashboard-profile-circle" type="button" aria-label="Profil">
          M
        </button>
        <img className="dashboard-bell" src={dashboardBellIcon} alt="" />

        <p className="dashboard-greeting">BONJOUR, MARIE</p>
        <p className="dashboard-profile-label">Profil</p>

        <div className="dashboard-trial-bar">
          <span>Version d’essai · 28 jours restants</span>
          <button type="button">S’ABONNER</button>
        </div>

        <div className="dashboard-connected-row">
          <span>Martin connecté</span>
          <i aria-hidden="true" />
          <button type="button">Envoyer une invitation</button>
          <img src={dashboardMailIcon} alt="" />
        </div>

        <div className="dashboard-child-selector" aria-label="Sélection enfant">
          <button className="active" type="button">
            LUCAS
          </button>
          <button type="button">EMMA</button>
          <button type="button">+ Ajouter</button>
        </div>
      </header>

      <div className="dashboard-content">
        <section className="dashboard-health-calendar">
          <div className="dashboard-section-title-row">
            <img src={dashboardCalendarIcon} alt="" />
            <div>
              <h2>CALENDRIER SANTÉ</h2>
              <p>Suivi de Lucas, 7 ans</p>
            </div>
            <span className="dashboard-calendar-dot" />
          </div>

          <div className="dashboard-panel dashboard-confirmed-card">
            <p className="dashboard-panel-label">RENDEZ-VOUS CONFIRMÉS</p>
            <div className="dashboard-event-row">
              <span className="dashboard-medical-icon">
                <img src={dentistIcon} alt="" />
              </span>
              <div>
                <h3>Dentiste</h3>
                <p>12/02/2026 · 10:30 · Rappel 5 j</p>
              </div>
              <span className="dashboard-chevron">›</span>
            </div>
            <div className="dashboard-event-row">
              <span className="dashboard-medical-icon light">
                <img src={eyeIcon} alt="" />
              </span>
              <div>
                <h3>Suivi ophtalmologique</h3>
                <p>05/03/2026 · 14:00 · Rappel 1 sem</p>
              </div>
              <span className="dashboard-chevron">›</span>
            </div>
            <div className="dashboard-card-links">
              <button type="button">+ Ajouter</button>
              <button type="button">SYNC</button>
              <button type="button">Tous les RV</button>
            </div>
          </div>

          <div className="dashboard-panel dashboard-planning-card">
            <p className="dashboard-panel-label">A PLANIFIER</p>
            <div className="dashboard-plan-row">
              <span className="dashboard-medical-icon pink">ORL</span>
              <div>
                <h3>ORL</h3>
                <p>Dernier rdv : 20/05/2023</p>
              </div>
              <span className="dashboard-plan-arrow">›</span>
              <strong>À RÉSERVER CETTE SEMAINE</strong>
            </div>
            <div className="dashboard-plan-row">
              <span className="dashboard-medical-icon pink">DTP</span>
              <div>
                <h3>Vaccin DTP</h3>
                <p>Dernier vaccin : 12/03/2024</p>
              </div>
              <span className="dashboard-plan-arrow">›</span>
              <strong>RAPPEL RECOMMANDÉ À 7 ANS</strong>
            </div>
            <div className="dashboard-card-links two">
              <button type="button">+ Ajouter</button>
              <button type="button">Tous les RV</button>
            </div>
          </div>
        </section>

        <section className="dashboard-mini-grid">
          <div className="dashboard-mini-card">
            <h2>CROISSANCE</h2>
            <strong>128 cm</strong>
            <p>+4 cm depuis février</p>
            <div className="dashboard-line-chart" aria-hidden="true">
              <span className="point a" />
              <span className="point b" />
              <span className="point c" />
              <span className="chart-line one" />
              <span className="chart-line two" />
            </div>
            <button type="button">Voir le suivi détaillé</button>
          </div>

          <div className="dashboard-mini-card">
            <h2>VACCINATIONS</h2>
            <strong>3/5 à jour</strong>
            <p>Lucas est à jour sur les vaccins obligatoires.</p>
            <div className="dashboard-vaccine-circle">3/5<br /><span>à jour</span></div>
            <button type="button">Voir le calendrier vaccinal</button>
          </div>
        </section>

        <section className="dashboard-panel dashboard-emergency-card">
          <div className="dashboard-emergency-top">
            <img className="dashboard-emergency-icon" src={dashboardShieldIcon} alt="" />
            <button className="dashboard-modify-button" type="button">MODIFIER</button>
          </div>

          <div className="dashboard-emergency-content">
            <img className="dashboard-child-photo" src={dashboardChildPhoto} alt="" />
            <div>
              <h2>PROFIL D’URGENCE</h2>
              <h3>Lucas Martin</h3>
              <p>7 ans · 14/05/2019</p>
            </div>
          </div>

          <div className="dashboard-emergency-details">
            <img className="dashboard-qr" src={dashboardQrIcon} alt="" />
            <div>
              <span>Groupe</span>
              <strong>A+</strong>
            </div>
            <div>
              <span>Conditions</span>
              <strong>Asthme</strong>
            </div>
            <div>
              <span>Allergies</span>
              <strong>Pénicilline</strong>
            </div>
            <div>
              <span>Carnet</span>
              <strong>à jour</strong>
            </div>
          </div>

          <div className="dashboard-emergency-actions">
            <button type="button">Partager le QR code</button>
            <button type="button">Imprimer la carte</button>
          </div>
        </section>

        <section className="dashboard-panel dashboard-doctors-book">
          <h2>CARNET DE MÉDECINS</h2>
          <div className="dashboard-doctor-row">
            <div>
              <span>MÉDECIN TRAITANT</span>
              <h3>Dr Sophie Mercier</h3>
            </div>
            <div className="dashboard-doctor-actions">
              <button type="button"><img src={dashboardDoctolibIcon} alt="" /></button>
              <button type="button" aria-label="Téléphone">
                <span className="dashboard-phone-icon" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="dashboard-doctor-row">
            <div>
              <span>OPHTALMOLOGUE</span>
              <h3>Dr Caroline Petit</h3>
            </div>
            <div className="dashboard-doctor-actions">
              <button type="button"><img src={dashboardDoctolibIcon} alt="" /></button>
              <button type="button" aria-label="Téléphone">
                <span className="dashboard-phone-icon" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="dashboard-doctor-row">
            <div>
              <span>PÉDIATRE</span>
              <h3>Dr Antoine Mercier</h3>
            </div>
            <div className="dashboard-doctor-actions">
              <button type="button"><img src={dashboardDoctolibIcon} alt="" /></button>
              <button type="button" aria-label="Téléphone">
                <span className="dashboard-phone-icon" aria-hidden="true" />
              </button>
            </div>
          </div>
          <button className="dashboard-all-doctors" type="button">
            VOIR TOUS LES MÉDECINS
          </button>
        </section>

        <section className="dashboard-panel dashboard-drive-card">
          <img src={googleDriveIcon} alt="" />
          <div>
            <h2>GOOGLE DRIVE CONNECTÉ</h2>
            <p>127 documents synchronisés</p>
            <small>Vos fichiers restent dans votre Drive. MediKid n’en stocke aucun.</small>
          </div>
          <span className="dashboard-drive-status" />
          <span className="dashboard-drive-arrow">›</span>
        </section>
      </div>

      <nav className="dashboard-bottom-nav" aria-label="Navigation du tableau de bord">
        <button className="active" type="button">
          <span>⌑</span>
          Accueil
        </button>
        <button className="dashboard-add-document-tab" type="button">
          <span>＋</span>
          Ajouter un document
        </button>
        <button type="button">
          <span>✦</span>
          IA Chat
        </button>
      </nav>
    </section>
  );
}

export default function App() {
  const [screen, setScreen] = useState('landing');

  const goToSignIn = () => setScreen('signin');
  const goToAddChild = () => setScreen('add-child');
  const goToConnectCloud = () => setScreen('connect-cloud');
  const goToScanDocument = () => setScreen('scan-document');
  const goToAnalyzeDocument = () => setScreen('analyze-document');
  const goToDocumentAnalyzed = () => setScreen('document-analyzed');
  const goToSpaceReady = () => setScreen('space-ready');
  const goToDashboard = () => setScreen('dashboard');

  return (
    <main className="app-shell">
      {screen === 'landing' && <LandingPage onSignIn={goToSignIn} />}
      {screen === 'signin' && <SignInPage onAddChild={goToAddChild} />}
      {screen === 'add-child' && <AddChildPage onContinue={goToConnectCloud} />}
      {screen === 'connect-cloud' && <ConnectCloudPage onContinue={goToScanDocument} />}
      {screen === 'scan-document' && <ScanDocumentPage onContinue={goToAnalyzeDocument} />}
      {screen === 'analyze-document' && <AnalyzeDocumentPage onContinue={goToDocumentAnalyzed} />}
      {screen === 'document-analyzed' && <DocumentAnalyzedPage onConfirm={goToSpaceReady} />}
      {screen === 'space-ready' && <SpaceReadyPage onDashboard={goToDashboard} />}
      {screen === 'add-document-placeholder' && <AddDocumentPlaceholderPage />}
      {screen === 'dashboard' && <DashboardPage />}
    </main>
  );
}
