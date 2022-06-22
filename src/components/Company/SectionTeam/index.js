import React from 'react';
import {t} from "i18next";
import * as styles from  "./team.module.scss";

const SectionTeam = () => {
	const persons = t('sections.team.persons');

  return (
		<section className={styles.team}>
			<h2 className={styles.title}>{ t('sections.team.title')}</h2>
			<div className={styles.list}>
				{ Object.keys(persons).map((id) => {
					return (
						<figure key={id} className={styles.card}>
							<picture>
								<source media='(min-width: 768px)' srcSet={`/img/company/${id}@1x.avif 1x, /img/company/${id}@2x.avif 2x`} type="image/avif" />
								<source media='(min-width: 768px)' srcSet={`/img/company/${id}@1x.webp 1x, /img/company/${id}@2x.webp 2x`} type="image/webp" />
								<source media='(min-width: 768px)' srcSet={`/img/company/${id}@1x.png 1x, /img/company/${id}@2x.png 2x`} type="image/png" />
								<source srcSet={`/img/company/${id}-mobile@1x.avif 1x, /img/company/${id}-mobile@2x.avif 2x`} type="image/avif" />
								<source srcSet={`/img/company/${id}-mobile@1x.webp 1x, /img/company/${id}-mobile@2x.webp 2x`} type="image/webp" />
								<img
									alt={ persons[id].name }
									src={`/img/company/${id}-mobile@1x.png`}
									srcSet={`/img/company/${id}-mobile@2x.png 2x`}
								/>
							</picture>
							<figcaption>
								<h4 className={styles.name}>{persons[id].name}</h4>
								<a className={styles.link} href={persons[id].link} rel="nofollow">
									<img alt={persons[id].name} src={'/svg/team-linkedin.svg'} />
								</a>
								<p className={styles.position}>{persons[id].position}</p>
								<p className={styles.description}>{persons[id].description}</p>
							</figcaption>
						</figure>
					)
				})}
			</div>
		</section>
  );
}

export default SectionTeam;
