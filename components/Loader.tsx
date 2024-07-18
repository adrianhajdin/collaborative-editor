import Image from 'next/image'

const Loader = () => {
  return (
    <div className="loader">
      <Image 
        src="/assets/icons/loader.svg"
        alt="loader"
        width={32}
        height={32}
        className="animate-spin"
      />
      Loading...
    </div>
  )
}

export default Loader