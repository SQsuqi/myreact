function Footer() {
  const [toggleDarkMode] = useDarkMode()

  return (
    <>
      <nav mt-6 inline-flex gap-2 text-xl>
        <button icon-btn onClick={ toggleDarkMode }>
          <div i-carbon-sun dark:i-carbon-moon />
        </button>

        <a
          i-carbon-logo-github icon-btn
          rel="noreferrer"
          href="https://github.com/sqsuqi/myreact"
          target="_blank"
          title="GitHub"
        />
      </nav>
    </>    
  )
}

export default Footer
