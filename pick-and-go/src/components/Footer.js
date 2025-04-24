function Footer() {
  return (
    <footer className="bg-blue-600 p-4 text-center mt-4 text-white">
      <p>© 2025 Pick and Go — All rights reserved</p>
      <p className="mt-2">
        Contact:{" "}
        <a
          href="mailto:lawrence.wambugu@student.moringaschool.com"
          className="underline hover:text-yellow-300"
        >
          lawrence.wambugu@student.moringaschool.com
        </a>{" "}
        | Phone:{" "}
        <a href="tel:+254727277127" className="underline hover:text-yellow-300">
          +254 727 277 127
        </a>
      </p>
    </footer>
  );
}

export default Footer;
