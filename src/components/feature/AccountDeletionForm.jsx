import React, { useState } from 'react';
import { Eye, AlertTriangle } from 'lucide-react';

const AccountDeletionForm = ({ onDeleteAccount, loading }) => {
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmText, setConfirmText] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!password) {
      setError('Password is required');
      return;
    }

    if (confirmText !== 'DELETE') {
      setError('Please type "DELETE" to confirm');
      return;
    }

    try {
      await onDeleteAccount(password);
      // Account deleted - redirect or show success message
    } catch (error) {
      setError(error.message);
    }
  };

  const resetForm = () => {
    setShowDeleteForm(false);
    setPassword('');
    setConfirmText('');
    setError('');
  };

  return (
    <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-red-200">
      <h3 className="text-lg font-semibold text-red-600 mb-4 flex items-center gap-2">
        <AlertTriangle className="h-5 w-5" />
        Danger Zone
      </h3>
      
      {!showDeleteForm ? (
        <div>
          <p className="text-gray-600 mb-4 text-sm">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <button
            onClick={() => setShowDeleteForm(true)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
          >
            Delete Account
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-red-800 font-medium text-sm mb-1">
                  This action cannot be undone
                </h4>
                <p className="text-red-700 text-sm">
                  This will permanently delete your account, all your events, and remove all associated data. 
                  This action cannot be reversed.
                </p>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Please type <span className="font-bold text-red-600">DELETE</span> to confirm
            </label>
            <input
              type="text"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
              placeholder="Type DELETE to confirm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Enter your password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <Eye className="h-4 w-4" />
              </button>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              disabled={loading || confirmText !== 'DELETE' || !password}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
            >
              {loading ? 'Deleting Account...' : 'I understand, delete my account'}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors text-sm font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AccountDeletionForm