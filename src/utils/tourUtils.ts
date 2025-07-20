// Helper function to get canonical destination names
export const getCanonicalDestinationName = (location: string): string => {
  if (location.toLowerCase().includes('kerala') || 
      location.toLowerCase().includes('kochi') || 
      location.toLowerCase().includes('munnar') || 
      location.toLowerCase().includes('alleppey') ||
      location.toLowerCase().includes('kumarakom')) {
    return 'Kerala';
  }
  if (location.toLowerCase().includes('manali') || 
      location.toLowerCase().includes('kullu') || 
      location.toLowerCase().includes('solang') ||
      location.toLowerCase().includes('rohtang')) {
    return 'Manali';
  }
  if (location.toLowerCase().includes('kashmir') || 
      location.toLowerCase().includes('srinagar') || 
      location.toLowerCase().includes('gulmarg') ||
      location.toLowerCase().includes('pahalgam') ||
      location.toLowerCase().includes('sonamarg')) {
    return 'Kashmir';
  }
  return location; // fallback to original location
};