import React from 'react';
import {t} from "i18next";
import * as styles from './parters.module.scss';

const SectionPartners = () => {
	return (
		<section className={styles.partners}>
			{ ['technology', 'product'].map((item) => {
				const list = t(`sections.partners.${item}.list`);

				return (
					<React.Fragment key={item}>
						<h2 className={styles.title}>{t(`sections.partners.${item}.title`)}</h2>
						<div className={styles.grid}>
							{ Object.keys(list).map((id) =>
									<div key={id} className={styles.wrapper} title={list[id]}>
										<div className={styles.card}>
											<picture>
												<source media='(min-width: 768px)' srcSet={`/img/partners/${id}@1x.png 1x, /img/partners/${id}@2x.png 2x`} type="image/png" />
												<img
													alt={ list[id] }
													src={`/img/partners/mobile/${id}@1x.png`}
													srcSet={`/img/partners/mobile/${id}@2x.png 2x`}
												/>
											</picture>
										</div>
									</div>
								)
							}
						</div>
					</React.Fragment>
				)
			})}

		</section>
	);
}

export default SectionPartners;
