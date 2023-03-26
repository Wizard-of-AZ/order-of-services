export default function LightRays({ color }) {
  return (
    <svg id="lightRays" width="34" height="40" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="0%" y1="50%" y2="50%" id="a">
          <stop stop-color={`var(--theme-page-header-nav-bg, ${color})`} stop-opacity=".6" offset="0%"></stop>
          <stop stop-color={`var(--theme-page-header-nav-bg, ${color})`} stop-opacity=".25" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="0%" y1="50%" y2="50%" id="b">
          <stop stop-color={`var(--theme-page-header-nav-bg, ${color})`} stop-opacity=".35" offset="0%"></stop>
          <stop stop-color={`var(--theme-page-header-nav-bg, ${color})`} stop-opacity=".15" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="0%" y1="50%" x2="98.607%" y2="50%" id="c">
          <stop stop-color={`var(--theme-page-header-nav-bg, ${color})`} stop-opacity=".6" offset="0%"></stop>
          <stop stop-color={`var(--theme-page-header-nav-bg, ${color})`} stop-opacity=".35" offset="100%"></stop>
        </linearGradient></defs><g fill-rule="nonzero" fill="none">
        <path fill="url(#a)" d="M8 40V0h10.34l-7.755 40z"></path>
        <path fill="url(#b)" d="M8 40V3.93L33.984 40z"></path>
        <path fill="url(#a)" d="M8 40V0l15.64 40z"></path>
        <path fill="url(#c)" d="M10.598 40H7V0h3.598z"></path>
        <path fill={`var(--theme-page-header-nav-bg, ${color})`} d="M0 0h8v40H0z"></path>
      </g>
    </svg>
  )
}