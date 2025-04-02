export default function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  className,
  required = false,
}) {
  return (
    <div className={`flex flex-col space-y-2  ${className} mb-4`}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-white">
          {label} {required && "*"}
        </label>
      )}
      <input
        required={required}
        type={type}
        id={name}
        name={name}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-[#ffffff11] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[3px] focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}
