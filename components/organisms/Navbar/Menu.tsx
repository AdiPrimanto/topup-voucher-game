import cx from 'classnames';
import Link from 'next/link';

// ? tidak require, jika tidak require hrs diberi default value/default props. Maka perlu diberi Partial yg artinya akan mendefine props scr partial, tidak seluruhnya
interface MenuProps {
    title: string;
    active?: boolean;
    href: string;
}

export default function Menu(props: Partial<MenuProps>) {
    const { title, active, href='/' } = props;
    const classTitle = cx({
        'nav-link': true,
        active,
    })

    return (
        <li className="nav-item my-auto">
            <Link href={href}>
                <a className={classTitle} aria-current="page">{title}</a>
            </Link>
        </li>
    )
}
