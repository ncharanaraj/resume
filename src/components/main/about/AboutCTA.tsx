import { Download } from "lucide-react";
import Button from "../../ui/Button";

const AboutCTA = () => {
  return (
    <div className="flex items-center gap-4">
      <Button buttonClass="flex gap-2 items-center" variant="button-primary">
        <Download size={20} />
        <span>Resume</span>
      </Button>
      <Button href="https://github.com/ncharanaraj" variant="button-secondary">
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
        >
          <title>GitHub</title>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      </Button>
      <Button href="https://x.com/ncharanaraj" variant="button-secondary">
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
        >
          <title>X</title>
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      </Button>
      <Button
        href="https://www.linkedin.com/in/ncharanaraj/"
        variant="button-secondary"
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
        >
          <title>LinkedIn</title>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.033-1.85-3.033-1.85 0-2.134 1.446-2.134 2.938v5.664H9.405V9h3.413v1.561h.049c.477-.9 1.64-1.85 3.37-1.85 3.6 0 4.262 2.37 4.262 5.45v6.291zM5.337 7a2.07 2.07 0 1 1 .001-4.14A2.07 2.07 0 0 1 5.337 7zm1.77 13.452H3.567V9h3.54v11.452zM22 0H2C.895 0 .01.895 0 2v20c0 1.105.895 2 2 2h20c1.105 0 2-.895 2-2V2c0-1.105-.895-2-2-2z" />
        </svg>
      </Button>
    </div>
  );
};

export default AboutCTA;
