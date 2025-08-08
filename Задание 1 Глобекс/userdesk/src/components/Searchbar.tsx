import "./Searchbar.css";

interface Props {
    value: string;
    onChange: (value: string) => void;
}

const Searchbar = ({ value, onChange }: Props) => (
    <input
        type="text"
        placeholder="Input name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
    />
);

export default Searchbar;
