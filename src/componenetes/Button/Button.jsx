function Button({ className, children, ...props }) {
  return (
    <button
      className={`bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-900 active:bg-blue-700 active:ring active:ring-blue-300 mt-4 transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
