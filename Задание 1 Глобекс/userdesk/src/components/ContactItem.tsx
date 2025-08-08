interface Props {
    icon: string;
    href: string;
    text: string;
    stopPropagation?: boolean;
}

const ContactItem = ({ icon, href, text, stopPropagation = true }: Props) => (
    <p>
        <img src={icon} alt="" />
        <a
            href={href}
            onClick={stopPropagation ? (e) => e.stopPropagation() : undefined}
        >
            {text}
        </a>
    </p>
);

export default ContactItem;
