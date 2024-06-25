const NewsletterForm = () => {
  return (
    <form
      name="newsletter"
      method="POST"
      target="_blank"
      action="https://bibliaonline.us6.list-manage.com/subscribe/post?u=b7957a6d11d56654e3ff3a0a8&amp;id=e8b52f5a93"
      className="static sm:flex sm:items-center font-sans mt-6"
    >
      <input
        name="EMAIL"
        type="email"
        placeholder="Tu correo electrónico"
        required
        className="block flex-1 w-full h-12 px-4 text-black bg-white rounded sm:inline-block sm:w-80 sm:rounded-e-none"
      />
      <button className="block w-full h-12 rounded mt-4 text-black bg-accent hover:opacity-90 transition-opacity sm:mt-0 sm:inline-block sm:w-44 sm:rounded-s-none">
        Mantenme al tanto
      </button>
    </form>
  );
};

export default NewsletterForm;
