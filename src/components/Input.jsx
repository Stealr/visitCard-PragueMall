export default function Input({ children }) {
    return (
        <div className="form-group">
            <label>{children}</label>
            <input />
        </div>
    );
}