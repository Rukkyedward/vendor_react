import React from 'react'
import ProfileSettings from '../feature/ProfileSettings';
import NotificationSettings from '../feature/NotificationSettings';
import PrivacySettings from '../feature/PrivacySettings';
import PasswordChangeForm from '../feature/PasswordChangeForm';
import AccountDeletionForm from '../feature/AccountDeletionForm';


const SettingsSection = ({ settings, isEditing, onEditProfile, onSaveProfile, onProfileChange, onNotificationChange, onPrivacyChange, onChangePassword, onDeleteAccount, loading }) => (
  <div className="space-y-6">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Settings</h2>
    </div>

    <ProfileSettings 
      profile={settings.profile}
      isEditing={isEditing}
      onEdit={onEditProfile}
      onSave={onSaveProfile}
      onChange={onProfileChange}
      loading={loading}
    />

    <NotificationSettings 
      notifications={settings.notifications}
      onChange={onNotificationChange}
    />

    <PrivacySettings 
      privacy={settings.privacy}
      onChange={onPrivacyChange}
    />

    <PasswordChangeForm 
      onChangePassword={onChangePassword}
      loading={loading}
    />

    <AccountDeletionForm 
      onDeleteAccount={onDeleteAccount}
      loading={loading}
    />
  </div>
);

export default SettingsSection