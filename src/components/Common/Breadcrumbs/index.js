import * as styles from './breadcrumbs.module.scss';
import Link from "next/link";
import classnames from "classnames";

/**
 *
 * @param {classNames: string} classNames
 * @param {Array.<{name: string, [href]: string}>} items Array of Breadcrumbs
 * @returns {JSX.Element}
 */
const Breadcrumbs = ({classNames, items= []}) => {
	const [last, ...all] = [...items].reverse();
	return items.length && (<div className={classnames(styles.breadcrumbs, classNames)}>
		{ all.reverse().map(({name, href}) => (
			<Link key={href} href={href}>
				<a className={styles.link}>{name}</a>
			</Link>
		)) }
		<a key={last.href}>
			{last.name}
		</a>
	</div>);
}

export default Breadcrumbs;
