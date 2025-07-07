const Email = ({ ref }) => {
  return (
    <>
      <label style={{ backgroundColor: "var(--color-input)" }} className="input validator text-lg w-full h-12 rounded-lg">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor" >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </g>
        </svg>
        <input ref={ref} type="email" name='email' placeholder="Enter your email address ..." required />
      </label>
      <div className="validator-hint hidden text-sm">❌ Enter valid email address</div>
    </>
  )
}

export default Email