class ApiService {
  static baseUrl = 'https://api.eventfinder.com/vendor';

  static async fetchEvents() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [
      { id: 1, title: 'Summer Music Festival', category: 'Music', date: '2025-08-15', status: 'Active', attendees: 250, revenue: 5250 },
      { id: 2, title: 'Tech Conference 2025', category: 'Technology', date: '2025-09-20', status: 'Draft', attendees: 0, revenue: 0 },
      { id: 3, title: 'Food & Wine Expo', category: 'Food', date: '2025-08-30', status: 'Active', attendees: 180, revenue: 3600 },
      { id: 4, title: 'Art Gallery Opening', category: 'Arts', date: '2025-08-25', status: 'Active', attendees: 95, revenue: 1900 },
      { id: 5, title: 'Sports Tournament', category: 'Sports', date: '2025-09-10', status: 'Scheduled', attendees: 300, revenue: 6000 }
    ];
  }

  static async fetchCategories() {
    await new Promise(resolve => setTimeout(resolve, 800));
    return [
      { id: 1, name: 'Music', eventCount: 5, color: '#3B82F6' },
      { id: 2, name: 'Technology', eventCount: 3, color: '#10B981' },
      { id: 3, name: 'Food', eventCount: 7, color: '#F59E0B' },
      { id: 4, name: 'Sports', eventCount: 2, color: '#EF4444' },
      { id: 5, name: 'Arts', eventCount: 4, color: '#8B5CF6' }
    ];
  }

  static async fetchSettings() {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      profile: { name: 'Vendor', email: 'contact@vendor.com', phone: '090243245' },
      notifications: { email: true, push: false, sms: true },
      privacy: { profileVisible: true, contactVisible: false }
    };
  }

  static async createEvent(eventData) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { id: Date.now(), ...eventData, attendees: 0, revenue: 0, status: 'Draft' };
  }

  static async updateEvent(id, eventData) {
    await new Promise(resolve => setTimeout(resolve, 800));
    return { success: true };
  }

  static async deleteEvent(id) {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { success: true };
  }

  static async createCategory(categoryData) {
    await new Promise(resolve => setTimeout(resolve, 800));
    return { id: Date.now(), ...categoryData, eventCount: 0 };
  }

  static async deleteCategory(id) {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { success: true };
  }

  static async updateSettings(settings) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true };
  }

  static async changePassword(oldPassword, newPassword) {
    await new Promise(resolve => setTimeout(resolve, 1200));
    // Mock password validation
    if (oldPassword !== 'currentPassword123') {
      throw new Error('Current password is incorrect');
    }
    if (newPassword.length < 8) {
      throw new Error('New password must be at least 8 characters');
    }
    return { success: true };
  }

  static async deleteAccount(password) {
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Mock password validation
    if (password !== 'currentPassword123') {
      throw new Error('Password is incorrect');
    }
    return { success: true };
  }
}

export default ApiService;