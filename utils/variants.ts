import { colors } from '../constants/theme';

export const getHealthVariant = (health: string) => {
  switch (health.toLowerCase()) {
    case 'utmärkt': return 'success';
    case 'bra': return 'warning';
    case 'varning': return 'error';
    default: return 'default';
  }
};

export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return colors.error[500];
    case 'medium': return colors.warning[500];
    case 'low': return colors.success[500];
    default: return colors.neutral[500];
  }
};

export const getStatusVariant = (status: string) => {
  switch (status) {
    case 'completed': return 'success';
    case 'action_needed': return 'warning';
    default: return 'default';
  }
};

export const getStatusText = (status: string) => {
  switch (status) {
    case 'completed': return 'Slutförd';
    case 'action_needed': return 'Åtgärd krävs';
    default: return 'Okänd';
  }
};