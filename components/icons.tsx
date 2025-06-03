import React from 'react';

export interface IconProps { // Added export
  className?: string;
}

export const MenuIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const XMarkIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const UserCircleIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export const ArrowLeftIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

export const AwsIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M55.29 106.88L48.75 76.01L36.99 75.78L30.45 106.88H20.4L36.03 33H49.71L65.34 106.88H55.29ZM44.85 46.4L39.15 70.01H47.19L44.85 46.4Z" fill="#FF9900"/>
      <path d="M95.76 84.83C95.76 94.55 90.66 100.07 81.42 100.07C72.3 100.07 66.99 94.76 66.99 87.32C66.99 76.13 79.08 73.97 89.49 71.81L92.91 71.15C92.91 67.43 90.78 65.15 86.73 65.15C83.31 65.15 80.37 66.95 79.08 69.44L70.65 65.39C72.66 60.08 78.36 55.97 86.49 55.97C95.88 55.97 101.73 60.56 101.73 67.55V89.66H109.5V97.79H101.73V106.88H92.22V97.79H91.23C88.65 100.91 84.72 102.92 80.43 102.92C75.27 102.92 71.55 100.79 69.42 97.31L78.36 93.14C78.9 94.28 80.19 95.18 81.9 95.18C84.6 95.18 86.49 93.62 86.49 91.04V85.88C77.19 87.2 70.53 89.78 70.53 97.2C70.53 103.7 75.15 107.87 82.08 107.87C88.29 107.87 92.79 104.63 94.71 100.07L95.76 84.83Z" fill="#FF9900"/>
      <path d="M149.82 106.88L143.28 76.01L131.52 75.78L124.98 106.88H115.02L130.56 33H144.24L159.87 106.88H149.82ZM139.38 46.4L133.68 70.01H141.72L139.38 46.4Z" fill="#FF9900"/>
      <path d="M200.976 59.57C195.456 56.27 187.956 55.13 182.796 55.13C172.956 55.13 167.256 60.83 167.256 67.43C167.256 73.91 172.056 77.99 181.476 79.43L186.876 80.15C192.276 80.99 194.856 82.91 194.856 86.39C194.856 90.23 191.496 92.63 187.056 92.63C182.016 92.63 178.776 89.99 177.636 86.75L169.056 89.39C171.076 95.99 177.996 100.07 187.416 100.07C197.256 100.07 203.496 94.79 203.496 86.75C203.496 77.27 195.996 74.39 187.656 72.83L183.396 72.11C178.356 71.27 176.076 69.59 176.076 67.07C176.076 64.31 178.776 62.03 182.796 62.03C186.756 62.03 189.756 63.83 190.776 66.47" transform="translate(0 0)" fill="#232F3E"/>
      <path d="M193.296 55.97C188.376 55.97 190.776 66.47 190.776 66.47L199.476 63.47C197.556 58.55 200.976 59.57 200.976 59.57C195.456 56.27 187.956 55.13 182.796 55.13C172.956 55.13 167.256 60.83 167.256 67.43C167.256 73.91 172.056 77.99 181.476 79.43L186.876 80.15C192.276 80.99 194.856 82.91 194.856 86.39C194.856 90.23 191.496 92.63 187.056 92.63C182.016 92.63 178.776 89.99 177.636 86.75L169.056 89.39C171.076 95.99 177.996 100.07 187.416 100.07C197.256 100.07 203.496 94.79 203.496 86.75C203.496 77.27 195.996 74.39 187.656 72.83L183.396 72.11C178.356 71.27 176.076 69.59 176.076 67.07C176.076 64.31 178.776 62.03 182.796 62.03C186.756 62.03 189.756 63.83 190.776 66.47" fill="#232F3E"/>
    </svg>
);

export const GcpIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M45.12 24.69c0-1.4-.13-2.76-.37-4.09H24.48v7.7h11.59c-.5 2.5-1.98 4.64-4.14 6.09v5.02h6.48c3.79-3.49 5.99-8.49 5.99-14.72z"/>
    <path fill="#34A853" d="M24.48 46c5.89 0 10.83-1.94 14.44-5.25l-6.48-5.02c-1.94 1.31-4.44 2.08-7.96 2.08-6.13 0-11.31-4.12-13.18-9.66H4.54v5.2C8.14 42.06 15.64 46 24.48 46z"/>
    <path fill="#FBBC05" d="M11.3 28.07c-.39-1.18-.61-2.43-.61-3.73s.22-2.55.61-3.73V15.4H4.54C3.16 18.25 2.4 21.52 2.4 25.01s.76 6.76 2.14 9.61l6.76-5.2z"/>
    <path fill="#EA4335" d="M24.48 10.92c3.22 0 6.02 1.1 8.28 3.24l5.75-5.75C35.31 2.18 30.37 0 24.48 0 15.64 0 8.14 3.94 4.54 10.43l6.76 5.2c1.87-5.54 7.05-9.75 13.18-9.75z"/>
  </svg>
);

export const AzureIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
    <path fill="#0078D4" d="M17.677,8.328l-11.18,11.087l20.413,0.031l8.454-8.454L17.677,8.328z"/>
    <path fill="#0078D4" d="M17.708,41.672l-11.211-11.12l20.444-0.031l8.423,8.423L17.708,41.672z"/>
    <path fill="#50E6FF" d="M19.182,21.086l-9.246-4.261l-2.68,5.838l11.742,0.016L19.182,21.086z"/>
    <path fill="#50E6FF" d="M19.212,28.914l-9.246,4.262l-2.711-5.838l11.773-0.016L19.212,28.914z"/>
    <path fill="#0078D4" d="M37.188,20.969L20.844,8.062L19.25,20.438l8.562,8.531L37.188,20.969z"/>
  </svg>
);

export const ServerStackIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m0 0l3 2.25-3 2.25m0 0l3 2.25-3 2.25M17.25 7.5l3 2.25-3 2.25m0 0l3 2.25-3 2.25m0 0l3 2.25-3 2.25M12 21V3M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const ShieldCheckIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0115 2.714M6.75 9.75C6.75 8.097 8.097 6.75 9.75 6.75S12.75 8.097 12.75 9.75s-1.403 3-3 3-3-1.303-3-3z" />
  </svg>
);

export const CpuChipIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M8.25 21v-1.5M4.5 15.75H3m18 0h-1.5M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5.25-2.25h-3.75a.75.75 0 00-.75.75v3.75c0 .414.336.75.75.75h3.75c.414 0 .75-.336.75-.75V9.75a.75.75 0 00-.75-.75zm-7.5 0h.008v.008H8.25V9.75zm.75 3.75h.008v.008H9v-.008zm3-3h.008v.008H12V9.75zm.75 3.75h.008v.008h-.008V13.5zm3-3h.008v.008h-.008V9.75z" />
  </svg>
);

export const ChartBarIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

export const CodeBracketSquareIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const UsersIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-3.741-5.408M14.25 12.75a3 3 0 11-6 0 3 3 0 016 0zM4.242 15.082a3 3 0 010-5.164 4.504 4.504 0 011.204-1.192A3 3 0 0110.5 9.75a3 3 0 011.05.208A4.506 4.506 0 0114.25 9a3 3 0 010 5.164 4.507 4.507 0 01-1.205 1.192A3 3 0 0110.5 15.75a3 3 0 01-1.05-.208A4.506 4.506 0 016 15.75a3 3 0 01-1.758-.668zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const LogoutIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
  </svg>
);

export const ExternalLinkIcon: React.FC<IconProps> = ({ className = "w-4 h-4 ml-1" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5 0V6.75A.75.75 0 0114.25 6h1.5a.75.75 0 01.75.75v1.5m-3 0h3m-3 0V6" />
  </svg>
);

export const DocumentTextIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

export const CogIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527c.47-.336 1.06-.176 1.31.316l.788 1.528c.25.49-.004 1.086-.475 1.388l-.704.44c-.39.246-.64.67-.64 1.126V12c0 .456.25.88.64 1.126l.704.44c.47.298.726.896.475 1.388l-.788 1.528c-.25.49-.84.652-1.31.316l-.737-.527c-.35-.25-.806-.272-1.205-.108-.396.165-.71.506-.78.93l-.149.894c-.09.542-.56.94-1.11.94h-1.093c-.55 0-1.02-.398-1.11-.94l-.149-.894c-.07-.424-.384-.764-.78-.93-.398-.164-.855-.142-1.205.108l-.737.527c-.47.336-1.06.176-1.31-.316l-.788-1.528c-.25-.49.004-1.086.475-1.388l.704-.44c.39-.246-.64-.67-.64-1.126V12c0-.456-.25-.88-.64-1.126l-.704-.44c-.47-.298-.726-.895-.475-1.388l.788-1.528c.25-.49.84-.652 1.31-.316l.737.527c.35.25.806.272 1.205.108.396-.165.71-.506.78-.93l.149-.894z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const PlusCircleIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const WrenchScrewdriverIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.472-2.472a3.75 3.75 0 00-5.303-5.303L6.255 9.75l5.165 5.42zM8.423 3.823c.803-.803 1.867-1.443 3.007-1.765V2.25a.75.75 0 011.5 0v.073c.86.253 1.656.658 2.348 1.21M19.597 8.403c.552.692.957 1.488 1.21 2.348h.073a.75.75 0 010 1.5h-.073c-.322 1.14-.962 2.204-1.765 3.007l-1.414-1.414M3.823 15.577c-.803.803-1.443 1.867-1.765 3.007H2.25a.75.75 0 010-1.5h.073c.253-.86.658-1.656 1.21-2.348l1.414 1.414z" />
  </svg>
);
