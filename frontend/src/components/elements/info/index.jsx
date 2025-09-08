import React, { useState, useEffect } from 'react';
import ChevronCircleLeftActiveImg from '../../../assets/svg/chevron.circle.left.active.svg';
import ChevronCircleRightActiveImg from '../../../assets/svg/chevron.circle.right.active.svg';

import ArrayData1Img from '../../../assets/image/absheron_logistika_merkezi_cover.jpg';
import ArrayData2Img from '../../../assets/image/success/employee2.png';
import ArrayData3Img from '../../../assets/image/success/employee3.png';
import ArrayData4Img from '../../../assets/image/success/employee4.png';
import ArrayData5Img from '../../../assets/image/success/employee5.png';
import ArrayData6Img from '../../../assets/image/success/employee6.png';
import QuoteOpenImg from '../../../assets/svg/quote.open.svg';
import QuoteCloseImg from '../../../assets/svg/quote.close.svg';



import ArrayData1Svg from '../../../assets/svg/calendar.svg';
import ArrayData2Svg from '../../../assets/svg/landscape.crop.rectangle.svg';
// import ArrayData2Img from '../../../assets/svg/bubble.left.and.bubble.right.svg';
// import ArrayData3Img from '../../../assets/svg/creditcard.svg';
// import ArrayData4Img from '../../../assets/svg/suitcase.svg';
// import ArrayData5Img from '../../../assets/svg/lightbulb.svg';
// import ArrayData6Img from '../../../assets/svg/chart.xyaxis.line.svg';
// import ArrayData7Img from '../../../assets/svg/lasso.sparkles.svg';


const Info = () => {
    const ArrayData = [
        { id: 0, image: ArrayData1Img, title:'Abşeron Logistika Mərkəzi Karyera Plaforması', description: 'Abşeron Logistika Mərkəzinin Karyera Portalı yeni əməkdaşların Mərkəzə cəlb olunması, işə qəbul prosesinin tənzimlənməsi və əməkdaşların inkişafının təmini məqsədilə yaradılıb. Mərkəzimiz iş imkanaları ilə yanaşı ödənişli təcrübə proqramları vasitəsilə gənc mütəxəssislərə real iş mühitində bilik və bacarıqlarını inkişaf etdirmək imkanı təqdim edir.\n\nMüxtəlif təhsil müəssisələri ilə qurulan əməkdaşlıqlar sayəsində tələbə və məzunlar üçün karyera və təcrübə mübadiləsi imkanları genişləndirilir. Mövcud əməkdaşların peşəkar inkişafı isə xüsusi təlimlər, mentorluq və inkişaf proqramları ilə dəstəklənir. Biz inanırıq ki, insan kapitalına qoyulan sərmayə şirkətin ən mühüm uğur faktorudur. İnsan resurları komandamız, həmçinin şəffaf seçim prosesi və ədalətli qiymətləndirmə sistemi ilə karyera yüksəlişinə zəmin yaradır.\n\nBurada hər bir əməkdaşın töhfəsi dəyərləndirilir və onların uğurları komandanın ümumi nailiyyəti kimi qəbul olunur. Karyera Portalı yeni istedadların şirkətə inteqrasiyası ilə yanaşı, mövcud əməkdaşların da uzunmüddətli inkişafına dəstək verir. İş mühitimiz əməkdaşlıq, hörmət və komanda ruhu prinsiplərinə əsaslanır.\n\nAbşeron Logistika Mərkəzində komandasında çalışmaq yalnızca iş yeri deyil, həm də öyrənmək, təcrübə qazanmaq və yeni bacarıqlar inkişaf etdirmək üçün geniş fürsətidir.' },
        // { id: 1, image: ArrayData2Img, description: 'Biz avtoparkı elektrikli maşınlara bunun bir hissəsi olmaq qürurvericidir.', name: 'Jane Smith', company: 'MB Broker' },
        // { id: 2, image: ArrayData3Img, description: 'Milyonuncu çatdırılmanı problemsiz görmək mənim üçün unudulmaz oldu.', name: 'Alice Johnson', company: 'Abşeron Logistika Mərkəzi' },
        // { id: 3, image: ArrayData4Img, description: 'Fövqəladə halda 24 saata yardım çatdıranda komandamla fəxr etdim.', name: 'Bob Brown', company: 'Abşeron Express' },
        // { id: 4, image: ArrayData5Img, description: 'İzləmə sistemini çatdırılmaların sürətləndiyini gözlərimlə gördüm.', name: 'Charlie Davis', company: 'Abşeron Logistika Mərkəzi' },
        // { id: 5, image: ArrayData6Img, description: '10 illik tərəfdaşlığın insanlara necə fayda verdiyini yaşamaq böyük təcrübə idi.', name: 'Eve Wilson', company: 'Abşeron Logistika Mərkəzi' },

    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(1);
    const [shouldHideNav, setShouldHideNav] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 576) {
                setItemsPerPage(1);
            } else if (width < 768) {
                setItemsPerPage(1);
            } else if (width < 992) {
                setItemsPerPage(1);
            } else if (width < 1200) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(1);
            }

            setShouldHideNav(ArrayData.length === 1 && width >= 1200);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [ArrayData.length]);

    useEffect(() => {
        if (!isHovered && !shouldHideNav) {
            const interval = setInterval(() => {
                goToNext();
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [currentIndex, isHovered, itemsPerPage, shouldHideNav]);

    const goToPrev = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === 0 ? ArrayData.length - itemsPerPage : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex(prevIndex =>
            prevIndex >= ArrayData.length - itemsPerPage ? 0 : prevIndex + 1
        );
    };

    const visibleItems = ArrayData.slice(currentIndex, currentIndex + itemsPerPage);
    const isAtStart = currentIndex === 0;
    const isAtEnd = currentIndex >= ArrayData.length - itemsPerPage;

    return (
        <div className="section-column" onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>

            {/* <p className='Title-Header'></p> */}
            {/* <p className='section-description'></p> */}

            <div className="Section-Card-Group SuccessCardGroup InfoCardGroup">
                <div className={`Card-Left ${shouldHideNav ? 'hide' : ''} No-Select`}>
                    <button onClick={goToPrev} className="nav-button">
                        <img
                            src={ChevronCircleLeftActiveImg}
                            alt="Previous"
                            className="success-nav-icon"
                        />
                    </button>
                </div>


                <div className="Section-Card">
                    {visibleItems.map((item) => (

                        <div className="SectionSuccess" key={item.id}>

                            <div className="SuccessTextGroup">
                                <div className="SuccessText SuccessText1">
                                    {/* <img src={QuoteOpenImg} className='No-Select QuoteImg QuoteOpenImg' /> */}
<h1>{item.title}</h1>
                                    <h2 className='item-desc' style={{ whiteSpace: 'pre-line' }}>{item.description}</h2>
                                    {/* <img src={QuoteCloseImg} className='No-Select QuoteImg QuoteCloseImg' /> */}

                                </div>
                                {/* <div className="SuccessDescription">
                                    <p>{item.name}</p>
                                    <p> {item.company}</p>

                                </div> */}
                            </div>
                            <div className="SuccessMain" >
                                <img src={item.image} className='No-Select' />
                            </div>

                        </div>
                    ))}
                </div>


                <div className={`Card-Right ${shouldHideNav ? 'hide' : ''} No-Select`}>
                    <button onClick={goToNext} className="nav-button">
                        <img
                            src={isAtEnd ? ChevronCircleRightActiveImg : ChevronCircleRightActiveImg}
                            alt="Next"
                            className="success-nav-icon"
                        />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Info;