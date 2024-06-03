function Home() {
  return (
    <>
      <h1 text-3xl font-bold underline >
          Hello Let's Go!
      </h1>
      <div i-carbon-logo-react w-10em h-10em ></div>
      <button btn>
        <Link to="/hi">
          <h1>Go to Router</h1>
        </Link>
      </button>  
    </>
  )
}

export default Home