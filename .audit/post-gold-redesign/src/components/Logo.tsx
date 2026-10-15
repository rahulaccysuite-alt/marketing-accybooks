export default function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className="logo" href="/" aria-label="AccyBooks home">
      <img
        src={inverse ? "/accybooks-logo-lockup-light.png" : "/accybooks-logo-lockup-dark.png"}
        alt="Accy-Books"
        width={574}
        height={119}
        decoding="async"
      />
    </a>
  );
}
