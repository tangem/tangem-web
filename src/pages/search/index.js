import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import InfiniteScroll from 'react-infinite-scroll-component'
import { TANGEM_COINS_API_URI } from '../../config'

import SearchIcon from '../../../public/svg/search.svg'
import CloseIcon from '../../../public/svg/close.svg'

import EthereumIcon from '../../../public/svg/ethereum.svg'
import FantomIcon from '../../../public/svg/fantom.svg'
import BinanceIcon from '../../../public/svg/binance.svg'
import AvalancheIcon from '../../../public/svg/avalanche.svg'
import PolygonIcon from '../../../public/svg/polygon.svg'
import SolanaIcon from '../../../public/svg/solana.svg'
import BscIcon from '../../../public/svg/bsc.svg'

const networkIcons = {
  'ethereum': {
    icon: <EthereumIcon />
  },
  'fantom': {
    icon: <FantomIcon />
  },
  'binance': {
    icon: <BinanceIcon />
  },
  'avalanche': {
    icon: <AvalancheIcon />
  },
  'polygon': {
    icon: <PolygonIcon />
  },
  'solana': {
    icon: <SolanaIcon />
  },
  'binance-smart-chain': {
    icon: <BscIcon />
  }
}

const Search = () => {

  const router = useRouter()

  const searchRef = useRef(null)
  const [isLoading, setLoading] = useState(false)
  const [tokenText, setTokenText] = useState('')

  const [tokenList, setTokenList] = useState([])
  const [total, setTotal] = useState(0)
  const [offset, setOffset] = useState(0)
  const [hasMoreTokens, setHasMoreTokens] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchCoins(20, offset)
    
    if (searchRef?.current) {
      searchRef?.current.focus()
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (tokenText?.length == 0) {
      setHasMoreTokens(true)
      fetchCoins(20, 0)
    }
  }, [tokenText])

  const onSeachChange = (e) => {
    setLoading(true)
    const searchedValue = e.target.value
    setTokenText(searchedValue)
    
    if (searchedValue?.length == 0 || searchedValue?.length < 2) {
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

  const Loader = () => {
    {return [...Array(10).keys()].map((_, id) => (
      <div key={id} className='w-full'>
        <div className="w-full mt-5 mx-auto lg:mx-0">
          <div className="animate-pulse flex space-x-[14px]">
            <div className="rounded-full bg-slate-200 h-[56px] w-[56px]"></div>
            <div className="flex flex-1 flex-col justify-center py-1 space-y-3">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
            </div>
          </div>
        </div>
      </div>
    ))}
  }

  return (
    <>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name="title" content="Tangem Wallet — hardware wallet for your crypto" />
        <meta name="description" content="Tangem Wallet lets you store your crypto assets secure and easily accessible while keeping private keys contained in your card." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tangem.com" />
        <meta property="og:site_name" content="Tangem Wallet — hardware wallet for your crypto" />
        <meta property="og:title" content="Tangem Wallet — hardware wallet for your crypto" />
        <meta property="og:description" content="Tangem Wallet lets you store your crypto assets secure and easily accessible while keeping private keys contained in your card." />
        <meta property="og:image" content="https://tangem-staging.netlify.app/img/hero/hero-phone-1x.png" />
        <meta property="og:video" content="https://www.youtube.com/watch?v=ST4jvcaE_UU" />
        <meta property="og:locale" content="en_US" />
        <title>Tangem Wallet — hardware wallet for your crypto</title>
        <link rel='shortcut icon' href='/img/favicon/favicon.png' />
        <link rel='apple-touch-icon' href='/img/favicon/favicon_180.png' />
      </Head>
      <div className='fixed bg-white left-0 right-0 top-0 bottom-0 overflow-hidden'>
        <div className='w-full h-full overscroll-contain'>
          
          <CloseIcon
            className='absolute top-1 right-4 max-w-[36px] cursor-pointer'
            onClick={() => router.push('/')}
          />
          <div className='text-[#090E13] text-32px text-center font-semibold mt-[40px] mb-32px lg:mb-10'>Search</div>

          <div className='flex flex-col w-full h-full'>

            <div className='sticky top-0'>
              <div className='w-full h-full flex items-center px-4 lg:px-0 lg:container lg:mx-auto'>
                <SearchIcon className='mr-2.5' />
                <input
                  type='text'
                  ref={searchRef}
                  value={tokenText}
                  onChange={onSeachChange}
                  placeholder='Search in 10087 cryptocurrencies'
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
                      height={'calc(100vh - 80px)'}
                      loader={<Loader />}
                      endMessage={
                        <p style={{ textAlign: "center" }}>
                          <b>Yay! You have seen it all</b>
                        </p>
                      }
                    >
                      {tokenList?.map(({ name, symbol, images, networks }, id) => (
                        <div key={id} className='flex mt-5'>
                          <span className='block mr-3.5 w-14 basis-[56px] md:basis-[70px]'>
                            {images?.large ? <img src={images?.large} alt={name} className='w-full h-full object-contain' /> : (
                              <span className='flex justify-center items-center font-bold text-xl rounded-full bg-white border border-[#ECECEC] w-[56px] h-[56px]'>
                                {symbol[0]}
                              </span>
                            )}
                          </span>
                          <span className='flex-[2_2_0%]'>
                            <span className='text-black text-xl font-medium'>
                              {name} {symbol}
                            </span>
                            <span className='flex h-4 mt-1.5 space-x-1.5'>
                              {networks?.length ? networks?.map((network, id) => {
                                return (
                                  <span key={id}>{networkIcons[network]?.icon}</span>
                                )
                              }) : (
                                <span key={id}>{networkIcons[0]?.icon}</span>
                              )}
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