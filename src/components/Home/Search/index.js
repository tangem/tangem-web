import { useState, useEffect, useRef } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { TANGEM_COINS_API_URI } from '../../../config'

import SearchIcon from '../../../../public/svg/search.svg'
import CloseIcon from '../../../../public/svg/close.svg'

import EthereumIcon from '../../../../public/svg/ethereum.svg'
import FantomIcon from '../../../../public/svg/fantom.svg'
import BinanceIcon from '../../../../public/svg/binance.svg'
import AvalancheIcon from '../../../../public/svg/avalanche.svg'
import PolygonIcon from '../../../../public/svg/polygon.svg'
import SolanaIcon from '../../../../public/svg/solana.svg'
import BscIcon from '../../../../public/svg/bsc.svg'
import TronIcon from '../../../../public/svg/tron.svg'
import ArbitrumIcon from '../../../../public/svg/arbitrum.svg'
import Network from '../../../../public/svg/network.svg'
import {t} from "i18next";

const networkIcons = {
	'ethereum': {
		icon: <EthereumIcon />,
		title: 'Ethereum'
	},
	'fantom': {
		icon: <FantomIcon />,
		title: 'Fantom'
	},
	'binancecoin': {
		icon: <BinanceIcon />,
		title: 'Binance'
	},
	'avalanche': {
		icon: <AvalancheIcon />,
		title: 'Avalanche'
	},
	'polygon-pos': {
		icon: <PolygonIcon />,
		title: 'Polygon'
	},
	'solana': {
		icon: <SolanaIcon />,
		title: 'Solana'
	},
	'binance-smart-chain': {
		icon: <BscIcon />,
		title: "Binance Smart Chain"
	},
	'blockchain': {
		icon: <Network />,
		title: ''
	},
	'arbitrum-one': {
		icon: <ArbitrumIcon />,
		title: "Arbitrum One"
	},
	// 'dogecoin': {},
	// 'bitcoin': {},
	// 'litecoin': {},
	// 'xrp': {},
	// 'cardano': {},
	// 'stellar': {},
	// 'ethereum-classic': {},
	'tron': {
		icon: <TronIcon />,
		title: 'Tron'
	},
	//'tezos': {},
	//'rootstock': {}
}

const Search = ({ hide, anchor }) => {

	const searchRef = useRef(null)
	const [isLoading, setLoading] = useState(false)
	const [tokenText, setTokenText] = useState('')

	const [tokenTotal, setTokenTotal] = useState(0)

	const [imageHost, setImageHost] = useState('')

	const [tokenList, setTokenList] = useState([])
	const [total, setTotal] = useState(0)
	const [offset, setOffset] = useState(0)
	const [hasMoreTokens, setHasMoreTokens] = useState(true)

	useEffect(() => {
		if (searchRef?.current) {
			searchRef?.current.focus()
		}
	}, []);

	useEffect(() => {
		const historyState = {...window.history.state };
		window.history.pushState(null, null, `#${anchor}`);

		return function deleteAnchor() {
			window.history.pushState( historyState, null, '#');
		}
	}, [anchor]);

	useEffect(() => {
		if (tokenText?.length === 0) {
			setHasMoreTokens(true)
			fetchCoins(20, 0)
		}
	}, [tokenText]);

	const onSearchChange = (e) => {
		setLoading(true)
		const searchedValue = e.target.value
		setTokenText(searchedValue)

		if (searchedValue?.length === 0 || searchedValue?.length < 2) {
			setLoading(false)
			return
		}
		searchCoins(searchedValue)
	}

	const fetchCoins = async (limit = 20, offset = 0) => {
		setLoading(true)
		const timestamp = Date.now()
		const response = await fetch(`${TANGEM_COINS_API_URI}list?limit=${limit}&offset=${offset}&ts=${timestamp}`)
		const coins = await response.json()

		setImageHost(coins.imageHost)
		setTokenTotal(coins.total)
		setTokenList(coins.tokens)
		setTotal(coins.tokens.length)
		setLoading(false)
	}

	const fetchMoreCoins = async () => {
		setLoading(true)

		if (tokenText?.length !== 0) {
			setHasMoreTokens(false)
			setLoading(false)
			return
		}

		if (tokenList?.length < total) {
			setHasMoreTokens(false)
			setLoading(false)
			return
		}

		const newOffset = offset + 20
		setOffset(newOffset)

		const timestamp = Date.now()
		const response = await fetch(`${TANGEM_COINS_API_URI}list?limit=20&offset=${newOffset}&ts=${timestamp}`)
		const coins = await response.json()

		const newList = [...tokenList, ...coins.tokens]

		setTokenList(newList)
		setLoading(false)
	}

	const searchCoins = async (coin) => {

		const response = await fetch(`${TANGEM_COINS_API_URI}find?search=${coin}`)
		const coins = await response.json()

		setHasMoreTokens(false)
		setTokenList(coins.tokens)
		setTotal(coins.total)
		setLoading(false)
	}

	const buildImage = (id) => {
		let isBroken = false

		const imageSrc = `${imageHost}large/${id}.png`
		let image = new Image()

		image.src = imageSrc

		image.addEventListener('load', () => {
			isBroken = false
		}, false)

		image.addEventListener('error', () => {
			isBroken = true
		}, false)

		return isBroken
	}

	const Loader = () => {
		{return [...Array(10).keys()].map((_, id) => (
			<div key={id} className='w-full'>
				<div className='w-full mt-5 mx-auto lg:mx-0'>
					<div className='animate-pulse flex space-x-[14px]'>
						<div className='rounded-full bg-slate-200 h-[56px] w-[56px] md:w-[70px] md:h-[70px]'></div>
						<div className='flex flex-1 flex-col justify-center py-1 space-y-3'>
							<div className='h-2 bg-slate-200 rounded'></div>
							<div className='h-2 bg-slate-200 rounded col-span-2'></div>
						</div>
					</div>
				</div>
			</div>
		))}
	}

	return (
		<>
			<div className='fixed bg-white left-0 right-0 top-0 bottom-0 overflow-hidden'>
				<div className='w-full h-full overscroll-contain relative lg:container lg:mx-auto'>

					<CloseIcon
						className='absolute top-0 right-[40px] max-w-[36px] cursor-pointer'
						onClick={ hide }
					/>
					<div className='text-[#090E13] text-32px text-center font-semibold my-10'>
						{ t('search.title') }
					</div>

					<div className='flex flex-col w-full h-full'>

						<div className='sticky top-0'>
							<div className='w-full h-full flex items-center px-4 lg:px-0 lg:container lg:mx-auto'>
								<SearchIcon className='mr-2.5' />
								<input
									type='text'
									ref={searchRef}
									value={tokenText}
									onChange={onSearchChange}
									placeholder={`${tokenTotal ? t('search.placeholder', { total: tokenTotal} ) : t('search.title')}`}
									className='w-full bg-transparent text-xl xl:text-3xl text-[#A6AAAD] font-light outline-0 outline-none outline-offset-0'
								/>
							</div>
						</div>

						<span className='block pb-13px border-b border-[#A6AAAD] opacity-20'></span>

						<div className='lg:container lg:mx-auto w-full h-full relative'>
							<div className="px-4 lg:px-0 absolute left-0 right-0 max-w-[100%] w-full h-full">
								<div className='flex flex-col h-[100vh]'>
									<div className='overscroll-contain'>
										<InfiniteScroll
											dataLength={tokenList.length}
											next={fetchMoreCoins}
											hasMore={hasMoreTokens}
											height={'calc(100vh - 11.125rem)'}
											loader={<Loader />}
										>
											{tokenList?.map(({ id, name, symbol, networks }) => (
												<div key={id} className='flex mt-5 select-none '>
                          <span className='block mr-3.5 w-14 h-14 md:w-[70px] md:h-[70px] basis-[56px] md:basis-[70px]'>
                            {
	                            buildImage(id) === false ? (
		                            <img src={`${imageHost}large/${id}.png`} alt={name} className='animate-fade-in w-full h-full object-contain' />
	                            ) : (
		                            <span className='flex justify-center items-center font-bold text-xl rounded-full bg-white border border-[#ECECEC] w-[56px] h-[56px]'>
                                  {symbol[0]}
                                </span>
	                            )
                            }
                          </span>
													<span className='flex-[2_2_0%]'>
                            <span className='text-black text-xl font-medium'>
                              {name} <span className='text-[#A1A1A4]'>{symbol}</span>
                            </span>
                            <span className='flex h-{18} mt-1.5 space-x-1.5 items-center'>
                              {networks?.map((network, id) => {
	                              if (networkIcons[network]?.icon === undefined) return
	                              return (
		                              <span key={id} title={networkIcons[network]?.title}>{networkIcons[network]?.icon}</span>
	                              )
                              })}
                            </span>
                          </span>
												</div>
											))}
										</InfiniteScroll>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Search
