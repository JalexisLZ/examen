function ShieldLogo() {
  try {
    return (
      <div className="relative" data-name="shield-logo" data-file="components/ShieldLogo.js">
        <svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M40 5 L75 15 L75 45 C75 65 60 85 40 95 C20 85 5 65 5 45 L5 15 Z" 
            fill="var(--secondary-color)"
            stroke="var(--primary-color)"
            strokeWidth="3"
          />
          <text x="40" y="55" fontSize="32" fill="var(--accent-color)" textAnchor="middle" fontWeight="bold">
            S
          </text>
        </svg>
      </div>
    );
  } catch (error) {
    console.error('ShieldLogo component error:', error);
    return null;
  }
}