
function DarkModeToggle() {
  return (
    <div>
      <svg display="none">
        <symbol id="light" viewBox="0 0 24 24">

        </symbol>

        <symbol id="dark" viewBox="0 0 24 24">
    
        </symbol>
      </svg>

      <label className="switch">
        <input className="switch__input" type="checkbox" role="switch" name="dark" />
        <svg className="switch__icon" width="24" height="24" aria-hidden="true">
          <use href="#light" />
        </svg>

        <svg className="switch__icon" width="24" height="24" aria-hidden="true">
          <use href="#dark" />
        </svg>

        <span className="switch__inner"></span>

        <span className="switch__inner-icons">
          <svg className="switch__icon" width="24" height="24" aria-hidden="true">
            <use href="#light" />
          </svg>

          <svg className="switch__icon" width="24" height="24" aria-hidden="true">
            <use href="#dark" />
          </svg>
        </span>
      </label>
    </div>
  );
}

export default DarkModeToggle;
