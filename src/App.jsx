import { useState } from 'react';
import landingBackgroundImage from './assets/landing-background.png.jpg';
import medikidGreenLogo from './assets/MediKid_logo_green.png';
import medikidInternalWhiteLogo from './assets/MediKid_logo_white.png';
import googleIcon from './assets/Google_Favicon_2025.svg 1.svg';
import appleIcon from './assets/Apple_logo_black.svg 1.svg';
import googleDriveLogo from './assets/250px-Google_Drive_logo.png';
import iCloudLogo from './assets/iCloud logo.svg';
import googleDriveIcon from './assets/Drive_icon.svg';
import fileCheckIcon from './assets/file-check 1.svg';
import folderInputIcon from './assets/folder-input 1.svg';
import chooseDriveIcon from './assets/Choisir-depuis-drive-icon.svg';
import scanIcon from './assets/scan 1.svg';
import botIconImage from './assets/bot 1.svg';
import loaderIcon from './assets/loader 1.svg';
import userIcon from './assets/user 1.svg';
import sproutIcon from './assets/sprout 2.svg';
import accueilIcon from './assets/accueil-icon.svg';
import addDocumentIcon from './assets/ajouter-document-icon.svg';
import iaChatIcon from './assets/ia-chat-icon.svg';
import shieldCheckIcon from './assets/shield-check1.svg';
import dentistIcon from './assets/dentist-icon.svg';
import eyeIcon from './assets/eye-icon.svg';
import orlIcon from './assets/orl_icon.svg';
import vaccineIcon from './assets/tabler_vaccine.svg';
import calendarIcon from './assets/calendar.svg';
import calendarSyncIcon from './assets/calendar-sync.svg';
import bellIcon from './assets/bell.svg';
import inviteIcon from './assets/mail 1.svg';
import crownIcon from './assets/crown.svg';
import checkIcon from './assets/check 1.svg';
import arrowRightIcon from './assets/arrow-right 1.svg';
import arrowRightActionIcon from './assets/arrow-right 2.svg';
import arrowTriangleIcon from './assets/arrow_triangle.svg';

function LandingPage({ onSignIn }) {
  return (
    <section className="medikid-frame landing-page" aria-label="MediKid landing page">
      <img className="landing-background" src={landingBackgroundImage} alt="" />
      <div className="landing-overlay" aria-hidden="true" />
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

      <img className="landing-logo" src={medikidGreenLogo} alt="MediKid" />
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
        <img src={arrowRightIcon} alt="" />
      </button>
      <button className="landing-login" type="button" onClick={onSignIn}>
        Déjà un compte ?
      </button>
    </section>
  );
}

function SignInPage({ onAddChild }) {
  return (
    <section className="medikid-frame signin-page" aria-label="Connexion MediKid">
      <img className="signin-logo medikid-page-logo" src={medikidInternalWhiteLogo} alt="MediKid" />
      <p className="signin-tagline">Votre secrétaire médical privé</p>

      <div className="signin-divider" aria-hidden="true">
        <span />
        <p>Connexion rapide</p>
        <span />
      </div>

      <button className="social-button google-button" type="button" onClick={onAddChild}>
        <img src={googleIcon} alt="" />
        <span>Continuer avec Google</span>
      </button>
      <button className="social-button apple-button" type="button" onClick={onAddChild}>
        <img src={appleIcon} alt="" />
        <span>Continuer avec Apple</span>
      </button>

      <p className="email-separator">ou par email</p>
      <label className="field-label email-label" htmlFor="signin-email">Adresse email</label>
      <input className="signin-field email-field" id="signin-email" type="email" placeholder="votre e-mail" />
      <label className="field-label password-label" htmlFor="signin-password">Mot de passe</label>
      <input className="signin-field password-field" id="signin-password" type="password" placeholder="***********" />

      <button className="signin-button" type="button" onClick={onAddChild}>
        <span>CRÉER MON COMPTE</span>
        <img src={arrowRightIcon} alt="" />
      </button>
      <a className="forgot-password" href="#">Mot de passe oublié?</a>
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
      <img className="add-child-logo medikid-page-logo" src={medikidInternalWhiteLogo} alt="MediKid" />
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
          <span className="add-child-photo-plus" aria-hidden="true" />
        </button>
        <p className="photo-action">Ajouter une photo</p>
        <p className="photo-note">Optionnel</p>
      </div>

      <div className="add-child-form">
        <label className="add-child-label" htmlFor="child-first-name">Prénom de l’enfant</label>
        <input className="add-child-input" id="child-first-name" type="text" />
        <label className="add-child-label birth-label" htmlFor="child-birth-date">Date de naissance</label>
        <input className="add-child-input" id="child-birth-date" type="text" />
        <label className="add-child-label doctor-label" htmlFor="child-doctor">Médecin traitant *</label>
        <input className="add-child-input" id="child-doctor" type="text" />
        <p className="doctor-note">* Optionnel, vous pourrez le compléter plus tard.</p>
      </div>

      <button className="add-child-primary" type="button" onClick={onContinue}>CONTINUER</button>
      <button className="add-child-secondary" type="button" onClick={onContinue}>Passer pour l’instant</button>
    </section>
  );
}

function ConnectCloudPage({ onContinue }) {
  return (
    <section className="medikid-frame connect-cloud-page" aria-label="Connectez votre cloud">
      <img className="connect-cloud-logo medikid-page-logo" src={medikidInternalWhiteLogo} alt="MediKid" />
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
        <img className="cloud-icon cloud-provider-logo google-drive-icon" src={googleDriveLogo} alt="" />
        <p className="cloud-title">Google Drive</p>
        <p className="cloud-description">
          <span>Active la création automatique</span>
          <span>du dossier MediKid.</span>
        </p>
        <span className="cloud-badge recommended-badge">Recommandé</span>
        <button className="cloud-connect-button" type="button">Connecter Google Drive</button>
      </div>

      <div className="cloud-card icloud-card">
        <img className="cloud-icon cloud-provider-logo cloud-provider-logo-white icloud-icon" src={iCloudLogo} alt="" />
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
      <button className="connect-continue-button" type="button" onClick={onContinue}>CONTINUER</button>
      <button className="connect-later-button" type="button" onClick={onContinue}>Je connecterai plus tard</button>
    </section>
  );
}

function ScanDocumentPage({ onContinue }) {
  return (
    <section className="medikid-frame scan-document-page" aria-label="Scannez un document">
      <img className="scan-document-logo medikid-page-logo" src={medikidInternalWhiteLogo} alt="MediKid" />
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
        <img className="document-scan-icon" src={scanIcon} alt="" />
        <p className="scan-main-title">Scanner un document</p>
        <p className="scan-main-copy">Prenez une photo avec votre téléphone</p>
        <button className="scan-main-button" type="button" onClick={onContinue}>Scanner un document</button>
      </div>

      <button className="scan-option-card import-option-card" type="button">
        <span className="scan-option-icon-circle">
          <img className="scan-import-icon" src={folderInputIcon} alt="" />
        </span>
        <span className="scan-option-title">Importer un PDF ou une image</span>
        <span className="scan-option-copy">Fichier reçu par email ou téléchargé</span>
      </button>
      <button className="scan-option-card drive-option-card" type="button">
        <span className="scan-option-icon-circle">
          <img className="scan-drive-icon" src={chooseDriveIcon} alt="" />
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
      <img className="analyze-document-logo medikid-page-logo" src={medikidInternalWhiteLogo} alt="MediKid" />
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
          <span className="analyze-icon-circle"><img className="analyze-check-icon" src={checkIcon} alt="" /></span>
          <span className="analyze-row-text">Document détecté</span>
        </div>
        <div className="analyze-divider analyze-divider-one" />
        <div className="analyze-row analyze-row-two">
          <span className="analyze-icon-circle"><img className="analyze-check-icon" src={checkIcon} alt="" /></span>
          <span className="analyze-row-text">Type : Certificat médical</span>
        </div>
        <div className="analyze-divider analyze-divider-two" />
        <div className="analyze-row analyze-row-three">
          <span className="analyze-icon-circle"><img className="analyze-loader-icon" src={loaderIcon} alt="" /></span>
          <span className="analyze-row-text loading">Lecture des informations utiles...</span>
        </div>
      </div>
      <button className="analyze-result-button" type="button" onClick={onContinue}>VOIR LE RÉSULTAT</button>
    </section>
  );
}

function DocumentAnalyzedPage({ onConfirm }) {
  return (
    <section className="medikid-frame document-analyzed-page" aria-label="Document analysé">
      <img className="document-analyzed-logo medikid-page-logo" src={medikidInternalWhiteLogo} alt="MediKid" />
      <div className="document-analyzed-progress" aria-label="Étape 4 sur 4">
        <span className="document-analyzed-progress-dot active" />
        <span className="document-analyzed-progress-dot active" />
        <span className="document-analyzed-progress-dot active" />
        <span className="document-analyzed-progress-line" />
        <span className="document-analyzed-progress-text">4 sur 4</span>
      </div>
      <h1 className="document-analyzed-title">
        DOCUMENT ANALYSÉ
        <span className="document-analyzed-title-check"><img src={checkIcon} alt="" /></span>
      </h1>
      <div className="document-result-card">
        <p className="document-result-heading">CERTIFICAT MÉDICAL</p>
        <p className="document-result-location">12 mai 2025 · Google Drive / MediKid / Lucas</p>
        <p className="document-info-heading">Informations trouvées</p>
        <div className="document-table-row document-row-type"><span className="document-table-label">TYPE</span><span className="document-table-value">Certificat médical</span></div>
        <div className="document-row-divider document-divider-one" />
        <div className="document-table-row document-row-date"><span className="document-table-label">DATE</span><span className="document-table-value">12 mai 2025</span></div>
        <div className="document-row-divider document-divider-two" />
        <div className="document-table-row document-row-doctor"><span className="document-table-label">MÉDECIN</span><span className="document-table-value">Dr Mercier</span></div>
        <div className="document-row-divider document-divider-three" />
        <div className="document-table-row document-row-height"><span className="document-table-label">TAILLE</span><span className="document-table-value">128 cm</span></div>
        <div className="document-row-divider document-divider-four" />
        <div className="document-table-row document-row-weight">
          <span className="document-table-label">POIDS</span>
          <span className="document-table-value">26,4 kg</span>
          <span className="document-check-badge">à vérifier</span>
        </div>
      </div>
      <div className="document-actions-card">
        <p className="document-action-line document-action-one"><span className="document-action-icon"><img src={checkIcon} alt="" /></span>Ajouté au suivi de croissance</p>
        <p className="document-action-line document-action-two"><span className="document-action-icon"><img src={checkIcon} alt="" /></span>Classé dans Documents médicaux</p>
        <p className="document-action-line document-action-three"><span className="document-action-icon" aria-hidden="true">!</span>Rappel possible détecté</p>
      </div>
      <button className="document-confirm-button" type="button" onClick={onConfirm}>CONFIRMER</button>
      <button className="document-edit-button" type="button">Modifier</button>
      <button className="document-delete-button" type="button">Supprimer</button>
    </section>
  );
}

function SpaceReadyPage({ onDashboard }) {
  return (
    <section className="medikid-frame space-ready-page" aria-label="Votre espace est prêt">
      <img className="space-ready-logo medikid-page-logo" src={medikidInternalWhiteLogo} alt="MediKid" />
      <h1 className="space-ready-title">
        <span>Votre espace</span>
        <span>MediKid est prêt</span>
      </h1>
      <p className="space-ready-subtitle">
        <span>Lucas a maintenant son dossier santé privé.</span>
        <span>Vous pouvez ajouter d&apos;autres documents,</span>
        <span>inviter un parent ou compléter son profil plus tard.</span>
      </p>
      <div className="space-status-card space-status-child"><img className="space-status-icon user" src={userIcon} alt="" /><p>Lucas ajouté</p></div>
      <div className="space-status-card space-status-drive"><img className="space-status-icon cloud" src={googleDriveIcon} alt="" /><p>Drive connecté</p></div>
      <div className="space-status-card space-status-document"><img className="space-status-icon document" src={fileCheckIcon} alt="" /><p>1 document analysé</p></div>
      <div className="space-status-card space-status-growth">
        <img className="space-status-icon growth" src={sproutIcon} alt="" />
        <p><span>Suivi de</span><span>croissance activé</span></p>
      </div>
      <button className="space-action-row space-action-document" type="button"><span>Ajouter un autre document</span><img src={arrowRightActionIcon} alt="" className="space-ready-action-arrow" /></button>
      <button className="space-action-row space-action-child" type="button"><span>Ajouter un enfant</span><img src={arrowRightActionIcon} alt="" className="space-ready-action-arrow" /></button>
      <button className="space-action-row space-action-parent" type="button"><span>Inviter un parent</span><img src={arrowRightActionIcon} alt="" className="space-ready-action-arrow" /></button>
      <button className="space-dashboard-button" type="button" onClick={onDashboard}>ALLER AU TABLEAU DE BORD</button>
    </section>
  );
}

function DashboardPage() {
  return (
    <section className="medikid-frame dashboard-page" aria-label="Tableau de bord MediKid">
      <header className="dashboard-header">
        <button className="dashboard-profile-circle" type="button" aria-label="Profil">M</button>
        <img className="dashboard-bell" src={bellIcon} alt="" />
        <p className="dashboard-greeting">BONJOUR, MARIE</p>
        <p className="dashboard-profile-label">Profil</p>
        <div className="dashboard-trial-bar">
          <span>Version d’essai · 28 jours restants</span>
          <button type="button">S’ABONNER<img src={crownIcon} alt="" className="dashboard-crown-icon" /></button>
        </div>
        <div className="dashboard-connected-row">
          <span>Martin connecté</span>
          <i aria-hidden="true" />
          <button type="button">Envoyer une invitation</button>
          <img className="dashboard-invite-icon" src={inviteIcon} alt="" />
        </div>
        <div className="dashboard-child-selector" aria-label="Sélection enfant">
          <button className="active" type="button"><span>L</span>LUCAS</button>
          <button type="button"><span>E</span>EMMA</button>
          <button className="dashboard-child-add-button" type="button"><span className="dashboard-child-add-plus" aria-hidden="true" /><span className="dashboard-child-add-label">Ajouter</span></button>
        </div>
      </header>

      <div className="dashboard-content">
        <section className="dashboard-health-calendar">
          <div className="dashboard-section-title-row">
            <div className="dashboard-section-title-left">
              <img src={calendarIcon} alt="" />
              <h2>CALENDRIER SANTÉ</h2>
            </div>
            <p>Suivi de Lucas, 7 ans</p>
          </div>

          <div className="dashboard-panel dashboard-confirmed-card">
            <p className="dashboard-panel-label">RENDEZ-VOUS CONFIRMÉS</p>
            <div className="dashboard-event-row">
              <span className="dashboard-medical-icon"><img src={dentistIcon} alt="" /></span>
              <div><h3>Dentiste</h3><p>12/02/2026 · 10:30 · Rappel 5 j</p></div>
              <button className="dashboard-row-arrow" type="button" aria-label="Voir le rendez-vous dentiste"><img src={arrowTriangleIcon} alt="" className="dashboard-row-triangle-arrow" /></button>
            </div>
            <div className="dashboard-event-row">
              <span className="dashboard-medical-icon light"><img src={eyeIcon} alt="" /></span>
              <div><h3>Suivi ophtalmologique</h3><p>05/03/2026 · 14:00 · Rappel 1 sem</p></div>
              <button className="dashboard-row-arrow" type="button" aria-label="Voir le suivi ophtalmologique"><img src={arrowTriangleIcon} alt="" className="dashboard-row-triangle-arrow" /></button>
            </div>
            <div className="dashboard-card-links">
              <button type="button"><span className="dashboard-plus-icon" aria-hidden="true">+</span>Ajouter</button>
              <button type="button"><img src={calendarSyncIcon} alt="" />SYNC</button>
              <button type="button"><img src={calendarIcon} alt="" />Tous les RV</button>
            </div>
          </div>

          <div className="dashboard-panel dashboard-planning-card">
            <p className="dashboard-panel-label">A PLANIFIER</p>
            <div className="dashboard-plan-row">
              <span className="dashboard-medical-icon pink"><img src={orlIcon} alt="" /></span>
              <div><h3>ORL</h3><p>Dernier rdv : 20/05/2023</p><strong>À RÉSERVER CETTE SEMAINE</strong></div>
              <button className="dashboard-row-arrow" type="button" aria-label="Planifier ORL"><img src={arrowTriangleIcon} alt="" className="dashboard-row-triangle-arrow dashboard-row-triangle-arrow-planning" /></button>
            </div>
            <div className="dashboard-plan-row">
              <span className="dashboard-medical-icon pink"><img src={vaccineIcon} alt="" /></span>
              <div><h3>Vaccin DTP</h3><p>Dernier vaccin : 12/03/2024</p><strong>RAPPEL RECOMMANDÉ À 7 ANS</strong></div>
              <button className="dashboard-row-arrow" type="button" aria-label="Planifier vaccin DTP"><img src={arrowTriangleIcon} alt="" className="dashboard-row-triangle-arrow dashboard-row-triangle-arrow-planning" /></button>
            </div>
            <div className="dashboard-card-links two">
              <button type="button"><span className="dashboard-plus-icon" aria-hidden="true">+</span>Ajouter</button>
              <button type="button"><img src={calendarIcon} alt="" />Tous les RV</button>
            </div>
          </div>
        </section>

        <section className="dashboard-mini-grid">
          <div className="dashboard-mini-card growth-card">
            <h2><img className="dashboard-mini-title-icon" src={sproutIcon} alt="" />CROISSANCE</h2>
            <strong>128 cm</strong>
            <p>+4 cm depuis février</p>
            <div className="dashboard-line-chart" aria-hidden="true"><span className="point a" /><span className="point b" /><span className="point c" /><span className="chart-line one" /><span className="chart-line two" /></div>
            <button type="button">Voir le suivi détaillé</button>
          </div>
          <div className="dashboard-mini-card vaccine-card">
            <h2><img className="dashboard-mini-title-icon" src={vaccineIcon} alt="" />VACCINATIONS</h2>
            <div className="dashboard-vaccine-circle">3/5<br /><span>à jour</span></div>
            <p>Lucas est à jour sur les vaccins obligatoires.</p>
            <button type="button">Voir le calendrier vaccinal</button>
          </div>
        </section>

        <section className="dashboard-emergency-section">
          <div className="dashboard-block-title">
            <img src={shieldCheckIcon} alt="" />
            <h2>PROFIL D’URGENCE</h2>
          </div>
          <div className="dashboard-emergency-card">
            <button className="dashboard-modify-button" type="button">MODIFIER</button>
            <div className="dashboard-emergency-content">
              <img className="dashboard-child-photo" src={userIcon} alt="" />
              <div><h3>Lucas Martin</h3><p>7 ans · 14/05/2019</p></div>
            </div>
            <div className="dashboard-emergency-details">
              <img className="dashboard-qr" src={fileCheckIcon} alt="" />
              <div><span>Groupe</span><strong>A+</strong></div>
              <div><span>Allergies</span><strong>Pénicilline</strong></div>
              <div><span>Conditions</span><strong>Asthme</strong></div>
              <div><span>Carnet</span><strong>à jour</strong></div>
            </div>
            <div className="dashboard-emergency-actions">
              <button type="button">Partager le QR code</button>
              <button type="button">Imprimer la carte</button>
            </div>
          </div>
        </section>

        <section className="dashboard-doctors-section">
          <div className="dashboard-block-title doctors-title">
            <img className="dashboard-doctors-title-icon" src={userIcon} alt="" />
            <h2>CARNET DE MÉDECINS</h2>
          </div>
          <div className="dashboard-doctors-book">
            <div className="dashboard-doctor-row"><div><span>MÉDECIN TRAITANT</span><h3>Dr Sophie Mercier</h3></div><button className="doctor-booking-button" type="button">Réserver</button></div>
            <div className="dashboard-doctor-row"><div><span>OPHTALMOLOGUE</span><h3>Dr Caroline Petit</h3></div><button className="doctor-booking-button" type="button">Réserver</button></div>
            <div className="dashboard-doctor-row"><div><span>PÉDIATRE</span><h3>Dr Antoine Mercier</h3></div><button className="doctor-booking-button" type="button">Réserver</button></div>
            <button className="dashboard-all-doctors" type="button">VOIR TOUS LES MÉDECINS</button>
          </div>
        </section>

        <section className="dashboard-panel dashboard-drive-card">
          <img src={googleDriveIcon} alt="" />
          <div>
            <h2>GOOGLE DRIVE CONNECTÉ</h2>
            <p>127 documents synchronisés</p>
            <small>Vos fichiers restent dans votre Drive. MediKid n’en stocke aucun.</small>
          </div>
          <span className="dashboard-drive-status" />
          <img className="dashboard-drive-arrow" src={arrowRightIcon} alt="" />
        </section>
      </div>

      <nav className="dashboard-bottom-nav" aria-label="Navigation du tableau de bord">
        <button className="active" type="button">
          <span className="dashboard-nav-icon" aria-hidden="true">
            <img src={accueilIcon} alt="" />
          </span>
          Accueil
        </button>
        <button className="dashboard-add-document-tab" type="button">
          <span className="dashboard-add-icon" aria-hidden="true">
            <img src={addDocumentIcon} alt="" />
          </span>
          Ajouter un document
        </button>
        <button type="button">
          <span className="dashboard-nav-icon" aria-hidden="true">
            <img src={iaChatIcon} alt="" />
          </span>
          IA Chat
        </button>
      </nav>
    </section>
  );
}

function AddDocumentPlaceholderPage() {
  return (
    <section className="medikid-frame add-document-placeholder-page" aria-label="Ajouter un document">
      <img className="placeholder-logo medikid-page-logo" src={medikidInternalWhiteLogo} alt="MediKid" />
      <div className="placeholder-card"><p>Ajouter un document à créer</p></div>
    </section>
  );
}

export default function App() {
  const [screen, setScreen] = useState('landing');

  return (
    <main className="app-shell">
      {screen === 'landing' && <LandingPage onSignIn={() => setScreen('signin')} />}
      {screen === 'signin' && <SignInPage onAddChild={() => setScreen('add-child')} />}
      {screen === 'add-child' && <AddChildPage onContinue={() => setScreen('connect-cloud')} />}
      {screen === 'connect-cloud' && <ConnectCloudPage onContinue={() => setScreen('scan-document')} />}
      {screen === 'scan-document' && <ScanDocumentPage onContinue={() => setScreen('analyze-document')} />}
      {screen === 'analyze-document' && <AnalyzeDocumentPage onContinue={() => setScreen('document-analyzed')} />}
      {screen === 'document-analyzed' && <DocumentAnalyzedPage onConfirm={() => setScreen('space-ready')} />}
      {screen === 'space-ready' && <SpaceReadyPage onDashboard={() => setScreen('dashboard')} />}
      {screen === 'add-document-placeholder' && <AddDocumentPlaceholderPage />}
      {screen === 'dashboard' && <DashboardPage />}
    </main>
  );
}
