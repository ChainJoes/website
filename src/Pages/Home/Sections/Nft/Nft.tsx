import { NftContent } from "./NftContent"
import { NftSliderData } from "./NftSliderData";
import { useState } from "react";
import useWindowDimensions from "../../../../Components/hooks/useWindowDimensions";
import nfsStoreImg from './Content/ntf-store.png';
import './Nft.scss';

export const Nft = () => {
    const [sliderOnAnim, setSliderOnAnim] = useState([false, 'to-left', -1]);
    const [activeSlide, setActiveSlide] = useState(0);
    const { width } = useWindowDimensions();

    const slideClassName = (index: number) => {
        if (index === activeSlide) {
            if (sliderOnAnim[0]) {
                return `slide active ${sliderOnAnim[1]}`
            } else {
                return 'slide active'
            }
        }

        if (sliderOnAnim[2] !== -1) {
            if (index > parseInt(sliderOnAnim[2]?.toString()) && sliderOnAnim[1] === 'to-right') {
                return `slide prev ${sliderOnAnim[1]} `
            }
            if (index < parseInt(sliderOnAnim[2]?.toString()) && sliderOnAnim[1] === 'to-left') {
                return `slide next ${sliderOnAnim[1]} `
            }
        }

        if (index === sliderOnAnim[2]) {
            if (index <= activeSlide - 1) {
                return 'slide prev top-index'
            }

            if (index >= activeSlide + 1) {
                return 'slide next top-index'
            }
        }

        if (index === activeSlide - 1) {
            return 'slide prev show'
        }

        if (index === activeSlide + 1) {
            return 'slide next show'
        }

        if (index <= activeSlide - 1) {
            return 'slide prev'
        }

        if (index >= activeSlide + 1) {
            return 'slide next'
        }

        return 'slide'
    }

    const changeActiveSlide = (index: number) => {
        if (index < activeSlide) {
            setSliderOnAnim([true, 'to-right', index]);
        }
        if (index > activeSlide) {
            setSliderOnAnim([true, 'to-left', index]);
        }
        setTimeout(() => {
            setSliderOnAnim([false, 'to-right', -1]);
            setActiveSlide(index);
        }, 330);
    }

    return (
        <section className="nft">
            <div className="wrap">
                {width < 768 &&
                    <img className="promo-img" src={nfsStoreImg} alt="Nfs Store" />
                }
                <div className="slider">
                    {NftSliderData.map((item, index) => (
                        <div className={slideClassName(index)} key={`sliderKey${index}`}>
                            <img src={item.mainImg} alt="" />
                        </div>
                    ))}
                    <div className="tabs">
                        {NftSliderData.map((item, index) => (
                            <div className={index === activeSlide ? 'tab active' : 'tab'} key={`sliderTab${index}`} onClick={() => changeActiveSlide(index)}>
                                <img src={item.tabImg} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <NftContent />
            </div>
        </section>
    )
}