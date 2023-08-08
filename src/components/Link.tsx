import { SelectedPage } from '@/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    page: string
    selectedpage: SelectedPage;
    setSelectedpage: (value: SelectedPage) => void
}

const Link = ({ page, selectedpage, setSelectedpage }: Props) => {
    const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage;

    return (
        <AnchorLink
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedpage(lowerCasePage)}
            className={`text-sm lg:text-xl ${selectedpage === lowerCasePage ? "font-bold" : "font-light"}`}
        >
            {page}
        </AnchorLink>
    )
}

export default Link