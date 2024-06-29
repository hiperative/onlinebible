const NewsletterForm = () => {
  return (
    <form
      name="newsletter"
      method="POST"
      target="_blank"
      action="https://bibliaonline.us6.list-manage.com/subscribe/post?u=b7957a6d11d56654e3ff3a0a8&amp;id=e8b52f5a93"
      className="static mt-6 font-sans sm:flex sm:items-center"
    >
      <input
        name="EMAIL"
        type="email"
        placeholder="Tu correo electrónico"
        required
        className="block h-12 w-full flex-1 rounded bg-white px-4 text-black sm:inline-block sm:w-80 sm:rounded-e-none"
      />
      <button className="mt-4 block h-12 w-full rounded bg-primary text-primary-foreground transition-opacity hover:opacity-90 sm:mt-0 sm:inline-block sm:w-44 sm:rounded-s-none">
        Mantenme al tanto
      </button>
    </form>
  )
}

export default NewsletterForm
