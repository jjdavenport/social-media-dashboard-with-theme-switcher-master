const Footer = () => {
  return (
    <>
      <footer className="flex gap-1 text-xs text-lightThemeVeryDarkBlueText justify-center font-inter bg-lightThemeBg dark:bg-darkThemeBg dark:text-darkThemeWhiteText">
        <p className="inline">
        Challenge by
        <a className="underline pl-1" href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a className="underline" href="https://github.com/jjdavenport">jjdavenport</a>.
        </p>
      </footer>
    </>
  );
};

export default Footer;
