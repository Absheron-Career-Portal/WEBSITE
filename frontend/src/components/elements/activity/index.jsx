import React, { useState, useEffect } from 'react';
import ChevronCircleLeftActiveImg from '../../../assets/svg/chevron.circle.left.active.svg';
import ChevronCircleRightActiveImg from '../../../assets/svg/chevron.circle.right.active.svg';
import CircleCloseImg from '../../../assets/svg/close.bubble.svg';

// Import different images for each item
import ArrayData1Img from '../../../assets/image/success/Group279.png';
import ArrayData2Img from '../../../assets/image/success/Group279.png';
import ArrayData3Img from '../../../assets/image/success/Group279.png';
import ArrayData4Img from '../../../assets/image/success/Group279.png';
import ArrayData5Img from '../../../assets/image/success/Group279.png';
import ArrayData6Img from '../../../assets/image/success/Group279.png';
import ArrayData7Img from '../../../assets/image/success/Group279.png';

import ArrayData1Svg from '../../../assets/svg/calendar.svg';
import ArrayData2Svg from '../../../assets/svg/landscape.crop.rectangle.svg';
import xSocialImage from '../../../assets/svg/x.social.svg';
import igSocialImage from '../../../assets/svg/ig.social.svg';
import inSocialImage from '../../../assets/svg/in.social.svg';
import fbSocialImage from '../../../assets/svg/fb.social.svg';

import ArrayDataADA0Img from '../../../assets/image/social/ada/0.jpg';
import ArrayDataADA1Img from '../../../assets/image/social/ada/1.jpg';
import ArrayDataADA2Img from '../../../assets/image/social/ada/2.jpg';
import ArrayDataADA3Img from '../../../assets/image/social/ada/3.jpg';

import ArrayDataBrainStorm0Img from '../../../assets/image/social/brainstorm/0.jpg';
import ArrayDataBrainStorm1Img from '../../../assets/image/social/brainstorm/1.jpg';
import ArrayDataBrainStorm2Img from '../../../assets/image/social/brainstorm/2.jpg';
import ArrayDataBrainStorm3Img from '../../../assets/image/social/brainstorm/3.jpg';

import ArrayDataBBU0Img from '../../../assets/image/social/bbu/0.jpg';
import ArrayDataBBU1Img from '../../../assets/image/social/bbu/1.jpg';
import ArrayDataBBU2Img from '../../../assets/image/social/bbu/2.jpg';
import ArrayDataBBU3Img from '../../../assets/image/social/bbu/3.jpg';

import ArrayDataBAU0Img from '../../../assets/image/social/bau/0.jpg';
import ArrayDataBAU1Img from '../../../assets/image/social/bau/1.jpg';
import ArrayDataBAU2Img from '../../../assets/image/social/bau/2.jpg';

import ArrayDataUNEC0Img from '../../../assets/image/social/unec/0.jpg';
import ArrayDataUNEC1Img from '../../../assets/image/social/unec/1.jpg';
import ArrayDataUNEC2Img from '../../../assets/image/social/unec/2.jpg';
import ArrayDataUNEC3Img from '../../../assets/image/social/unec/3.jpg';

import ArrayDataART0Img from '../../../assets/image/social/art/0.jpg';
import ArrayDataART1Img from '../../../assets/image/social/art/1.jpg';
import ArrayDataART2Img from '../../../assets/image/social/art/2.jpg';
import ArrayDataART3Img from '../../../assets/image/social/art/3.jpg';

import ArrayDataBMU0Img from '../../../assets/image/social/bmu/0.jpg';
import ArrayDataBMU1Img from '../../../assets/image/social/bmu/1.jpg';
import ArrayDataBMU2Img from '../../../assets/image/social/bmu/2.jpg';
import ArrayDataBMU3Img from '../../../assets/image/social/bmu/3.jpg';

import ArrayDataSWITZ0Img from '../../../assets/image/social/switz/0.jpg';
import ArrayDataSWITZ1Img from '../../../assets/image/social/switz/1.jpg';
import ArrayDataSWITZ2Img from '../../../assets/image/social/switz/2.jpg';
import ArrayDataSWITZ3Img from '../../../assets/image/social/switz/3.jpg';

import ArrayDataAZTU0Img from '../../../assets/image/social/aztu/0.jpg';
import ArrayDataAZTU1Img from '../../../assets/image/social/aztu/1.jpg';
import ArrayDataAZTU2Img from '../../../assets/image/social/aztu/2.jpg';
import ArrayDataAZTU3Img from '../../../assets/image/social/aztu/3.jpg';

import ArrayData1AZTU0Img from '../../../assets/image/social/aztu1/0.jpg';
import ArrayData1AZTU1Img from '../../../assets/image/social/aztu1/1.jpg';
import ArrayData1AZTU2Img from '../../../assets/image/social/aztu1/2.jpg';
import ArrayData1AZTU3Img from '../../../assets/image/social/aztu1/3.jpg';

import ArrayData1MARSOL0Img from '../../../assets/image/social/marsol/0.jpg';
import ArrayData1MARSOL1Img from '../../../assets/image/social/marsol/1.jpg';
import ArrayData1MARSOL2Img from '../../../assets/image/social/marsol/2.jpg';
import ArrayData1MARSOL3Img from '../../../assets/image/social/marsol/3.jpg';

import ArrayData1PRODUCTION0Img from '../../../assets/image/social/production/0.jpg';
import ArrayData1PRODUCTION1Img from '../../../assets/image/social/production/1.jpg';
import ArrayData1PRODUCTION3Img from '../../../assets/image/social/production/2.jpg';
import ArrayData1PRODUCTION2Img from '../../../assets/image/social/production/3.jpg';
import ArrayData1PRODUCTION4Img from '../../../assets/image/social/production/4.jpg';


import ArrayDataQUBA0Img from '../../../assets/image/social/quba/0.jpg';
import ArrayDataQUBA1Img from '../../../assets/image/social/quba/1.jpg';
import ArrayDataQUBA2Img from '../../../assets/image/social/quba/2.jpg';
import ArrayDataQUBA3Img from '../../../assets/image/social/quba/3.jpg';
import ArrayDataQUBA4Img from '../../../assets/image/social/quba/4.jpg';

import ArrayDataBDU0Img from '../../../assets/image/social/bdu/0.jpg';
import ArrayDataBDU1Img from '../../../assets/image/social/bdu/1.jpg';
import ArrayDataBDU2Img from '../../../assets/image/social/bdu/2.jpg';
import ArrayDataBDU3Img from '../../../assets/image/social/bdu/3.jpg';
import ArrayDataBDU4Img from '../../../assets/image/social/bdu/4.jpg';


const Activity = () => {
    const ArrayData = [

  {
    id: 0,
    image: ArrayData1PRODUCTION0Img,
    linkImage: ArrayData2Svg,
    imageTotal: '3',
    dateImage: ArrayData1Svg,
    date: '1 Sentyabr, 2025',
    title: 'İsehsalat təcrübəçilərimiz',
    description: 'ALM hər il müxtəlif təhsil müəssisələrinin sonuncu kurs tələbələrinə logistikanın...',
    additionalImages: [ArrayData1PRODUCTION1Img, ArrayData1PRODUCTION2Img, ArrayData1PRODUCTION3Img, ArrayData1PRODUCTION4Img],
    extendedDescription: 'ALM hər il müxtəlif təhsil müəssisələrinin sonuncu kurs tələbələrinə logistikanın fərqli istiqamətləri üzrə istehsalat təcrübəsi keçmək imkanı yaradır. Təcrübə proqramı gənclərin nəzəri biliklərini real iş mühitində tətbiq etməsinə və peşəkar bacarıqlarını inkişaf etdirməsinə şərait yaradır. Bu təşəbbüs gələcək mütəxəssislərin formalaşmasına dəstək göstərməyi hədəfləyir.'
  },
  {
    id: 1,
    image: ArrayDataBrainStorm0Img,
    linkImage: ArrayData2Svg,
    imageTotal: '3',
    dateImage: ArrayData1Svg,
    date: '13 Avqust, 2025',
    title: 'Brain Storm 2025',
    description: '13 avqust tarixində Abşeron Logistika Mərkəzinin 7 illiyi münasibətilə...',
    additionalImages: [ArrayDataBrainStorm1Img, ArrayDataBrainStorm2Img, ArrayDataBrainStorm3Img,],
    extendedDescription: '13 avqust tarixində Abşeron Logistika Mərkəzinin 7 illiyi münasibətilə ənənəvi “Brain Storm 2025” intellektual yarışması keçirlmişdir. Həyəcanlı və maraqlı keçən yarışda Maliyyə departamenti, Abşeron Express və İR əməkdaşlarından ibarət komandalar ilk üç yeri qazanmışdır. Qaliblər kubok, sertifikat və dəyərli hədiyyələrlə mükafatlandırılıb. Bütün iştirakçıları təbrik edir, gələcək fəaliyyətlərində bol-bol uğurlar arzulayırıq!'
  },
  {
    id: 2,
    image: ArrayData1AZTU0Img,
    linkImage: ArrayData2Svg,
    imageTotal: '3',
    dateImage: ArrayData1Svg,
    date: '30 May, 2025',
    title: 'AzTU tələbələrinin ekskursiyası',
    description: 'AzTU Beynəlxalq logistika və təchizat zəncirinin idarə edilməsi üzrə ixtisas...',
    additionalImages: [ArrayData1AZTU1Img, ArrayData1AZTU2Img, ArrayData1AZTU3Img],
    extendedDescription: 'AzTU Beynəlxalq logistika və təchizat zəncirinin idarə edilməsi üzrə ixtisaslaşmasında və Nəqliyyat və logistika fakültəsində təhsil alan bir qrup 2-ci və 3-cü kurs tələbələri 30 May tarixində Mərkəzimizdə ekskursiyada olmuşdur. Təlbələrə ALM-də mövcud iş prosesləri detallı formada izah edilmişdir.'
  },
  {
    id: 3,
    image: ArrayDataBDU0Img,
    linkImage: ArrayData2Svg,
    imageTotal: '4',
    dateImage: ArrayData1Svg,
    date: '27 May, 2025',
    title: 'BDU karyera sərgisi',
    description: 'Abşeron Logistika Mərkəzi 27 may tarixində Bakı Dövlət Universitetində keçirilən karyera...',
    additionalImages: [ArrayDataBDU1Img, ArrayDataBDU2Img, ArrayDataBDU3Img, ArrayDataBDU4Img],
    extendedDescription: 'Abşeron Logistika Mərkəzi 27 may tarixində Bakı Dövlət Universitetində keçirilən karyera sərgisində iştirak edib. Stendimizdə qonaqlara Mərkəz haqqında, mövcud vakansiyalar, təcrübə və təqaüd imkanları barədə ətraflı məlumat verilib.'
  },
  {
    id: 4,
    image: ArrayDataBBU0Img,
    linkImage: ArrayData2Svg,
    imageTotal: '3',
    dateImage: ArrayData1Svg,
    date: '23 May, 2025',
    title: 'BBU karyera sərgisi',
    description: '23 may tarixində Bakı Biznes Universitetində keçirilən karyera sərgisində Abşeron Logistika...',
    additionalImages: [ArrayDataBBU1Img, ArrayDataBBU2Img, ArrayDataBBU3Img],
    extendedDescription: '23 may tarixində Bakı Biznes Universitetində keçirilən karyera sərgisində Abşeron Logistika Mərkəzi olaraq biz də iştirak etdik. Stendimizə yaxınlaşan ziyarətçilərə əməkdaşlarımız tərəfindən Mərkəzin iş prinsipi, təcrübə və iş imkanları, həmçinin təqaəd proqramları haqqında ətraflı məlumat təqdim olundu. Tədbir zamanı universitetin rektoru İbad Abbasov da stendimizi ziyarət etdi və təqdimatımızla maraqlandı.'
  },
  {
    id: 5,
    image: ArrayDataBMU0Img,
    linkImage: ArrayData2Svg,
    imageTotal: '3',
    dateImage: ArrayData1Svg,
    date: '22 May, 2025',
    title: 'BMU karyera sərgisi',
    description: '22 may tarixində Bakı Mühəndilik Univeristetində keçirilən CareerFest karyera sərgisində...',
    additionalImages: [ArrayDataBMU1Img, ArrayDataBMU2Img, ArrayDataBMU3Img],
    extendedDescription: '22 may tarixində Bakı Mühəndilik Univeristetində keçirilən CareerFest karyera sərgisində Abşeron Logistika Mərkəzi olaraq biz də iştirak edirik. Stendimizə yaxınlaşan ziyarətçilərə əməkdaşlarımız tərəfindən Mərkəzin iş prinsipi, təcrübə və iş imkanları, həmçinin təqaəd proqramları haqqında ətraflı məlumat təqdim olunur.'
  },
  {
    id: 6,
    image: ArrayDataADA0Img,
    linkImage: ArrayData2Svg,
    imageTotal: '3',
    dateImage: ArrayData1Svg,
    date: '2 May, 2025',
    title: 'ADA Universiteti karyera sərgisi',
    description: '2 May tarixində ADA Universitetində keçirilmiş karyera sərgisində Abşeron Logistika...',
    additionalImages: [ArrayDataADA1Img, ArrayDataADA2Img, ArrayDataADA3Img,],
    extendedDescription: '2 May tarixində ADA Universitetində keçirilmiş karyera sərgisində Abşeron Logistika Mərkəzi də iştirak edib. Stendimizə yaxınlaşan ziyarətçilərə əməkdaşlarımız tərəfindən Mərkəzin iş prinsipi, təcrübə və iş imkanları, eləcə də təqaəd proqramları barədə ətraflı məlumat verilmişdir. Tədbirin yüksək səviyyədə təşkilinə görə ada.university -ə təşəkkür edirik.'
  },
  {
    id: 7,
    image: ArrayDataUNEC0Img,
    linkImage: ArrayData2Svg,
    imageTotal: '3',
    dateImage: ArrayData1Svg,
    date: '7 May, 2025',
    title: 'UNEC karyera sərgisi',
    description: '7 may tarixində UNEC-də təşkil olunmuş karyera sərgisində Abşeron Logistika Mərkəzi...',
    additionalImages: [ArrayDataUNEC1Img, ArrayDataUNEC2Img, ArrayDataUNEC3Img],
    extendedDescription: '7 may tarixində UNEC-də təşkil olunmuş karyera sərgisində Abşeron Logistika Mərkəzi də fəal iştirak etmişdir.Stendimizi ziyarət edən iştirakçılar əməkdaşlarımız tərəfindən Mərkəzin fəaliyyət istiqamətləri, təcrübə və karyera imkanları, həmçinin təqdim olunan təqaəd proqramları barədə məlumatlandırılmışdır.'
  },
  {
    id: 8,
    image: ArrayDataBAU0Img,
    linkImage: ArrayData2Svg,
    imageTotal: '2',
    dateImage: ArrayData1Svg,
    date: '11 Noyabr, 2024',
    title: 'BAU ilə memorandum imzalanıb',
    description: 'Memorandumda BAAU-da bakalavriat və magistratura səviyyələrində təhsil alan və ixtisas...',
    additionalImages: [ArrayDataBAU1Img, ArrayDataBAU2Img],
    extendedDescription: 'Memorandumda BAAU-da bakalavriat və magistratura səviyyələrində təhsil alan və ixtisas meyarları Abşeron Logistika Mərkəzinin xidmət göstərdiyi sahələrə uyğun olan tələbələrin təcrübə keçməsi, müvafiq ixtisas - peşə təlimlərinə zərurət yarandıqda Mərkəzin əməkdaşları üçün BAAU tərəfindən qısamüddətli ixtisasartırma proqramlarının təşkil edilməsi istiqamətində əməkdaşlıq nəzərdə tutulur. Həmçinin ölkənin iqtisadi rayonları üzrə yük daşımalarının təhlili və proqnozlaşdırılması, logistika, informasiya texnologiyaları üzrə elmi - praktiki müzakirələrin təşkili, bazar araşdırmalarının birgə aparılması, təhsil sahəsində müasir texnologiyaların və elmi inkişafın nəticələrinin istifadəsində qarşılıqlı əməkdaşlıq kimi məsələlər də memorandumda öz əksini tapıb.'
  },
  {
    id: 9,
    image: ArrayDataART0Img,
    linkImage: ArrayData2Svg,
    imageTotal: '3',
    dateImage: ArrayData1Svg,
    date: '8 Noyabr, 2024',
    title: 'Zəfərə doğru rəsm müsabiqəsi',
    description: '8 Noyabr – Zəfər Gününün 4-cü ildönümü münasibətilə ALM əməkdaşlarının övladları...',
    additionalImages: [ArrayDataART1Img, ArrayDataART2Img, ArrayDataART3Img],
    extendedDescription: '8 Noyabr – Zəfər Gününün 4-cü ildönümü münasibətilə ALM əməkdaşlarının övladları arasında “Zəfərə doğru” adlı rəsm müsabiqəsi keçirilmişdir. Müsabiqəyə təqdim olunan əsərlər Mərkəz əməkdaşlarının səsverməsi əsasında qiymətləndirilib. Qaliblər və bütün iştirakçılar Mərkəz adından qiymətli hədiyyələrlə mükafatlandırılmışdır.'
  },
  {
    id: 10,
    image: ArrayDataSWITZ0Img,
    linkImage: ArrayData2Svg,
    imageTotal: '3',
    dateImage: ArrayData1Svg,
    date: '1 Oktyabr, 2024',
    title: 'Xarici tələbələrin ALM səfəri',
    description: 'Azərbaycan Dövlət İqtisad Universiteti ilə əməkdaşlıq çərçivəsində İsveçrəli tələbələr...',
    additionalImages: [ArrayDataSWITZ1Img, ArrayDataSWITZ2Img, ArrayDataSWITZ3Img],
    extendedDescription: 'Azərbaycan Dövlət İqtisad Universiteti (UNEC) ilə əməkdaşlıq çərçivəsində İsveçrəli tələbələr Abşeron Logistika Mərkəzində olub. Gələn qonaqlara Mərkəzin keçdiyi inkişaf yolu, regionun ən böyük quru limanında icra edilən layihələr və iş prosesi ilə bağlı məlumat verilib, onların Mərkəz haqqında bütün sualları mütəxəssislərimiz tərəfindən cavablandırılıb.'
  },
  {
    id: 11,
    image: ArrayData1MARSOL0Img,
    linkImage: ArrayData2Svg,
    imageTotal: '3',
    dateImage: ArrayData1Svg,
    date: '1 Oktyabr, 2024',
    title: ' Əməkdaşımız şirkətlətarası intellektual yarışmada ',
    description: 'ALM əməkdaşları KSM tədbirləri çərçivəsində şirkətlərarası III Marsol...',
    additionalImages: [ArrayData1MARSOL1Img, ArrayData1MARSOL2Img, ArrayData1MARSOL3Img],
    extendedDescription: 'ALM əməkdaşları KSM tədbirləri çərçivəsində şirkətlərarası III Marsol Zəfər Kuboku intellektual yarışında iştirak etmişdir. Yarışmada 40-a yaxın aparıcı şirkətin komandaları bilik və zəka üzərində mübarizə aparmışdır. Bu tədbir əməkdaşlarımızın intellektual bacarıqlarının inkişafı və korporativ əlaqələrin gücləndirilməsi üçün mühüm platforma olmuşdur.'
  },
  {
    id: 12,
    image: ArrayDataQUBA0Img,
    linkImage: ArrayData2Svg,
    imageTotal: '4',
    dateImage: ArrayData1Svg,
    date: '14 İyul, 2024',
    title: ' Komandamızın Quba səfəri',
    description: 'İyul ayında ALM əməkdaşları üçün KSM tədbirləri çərçivəsində 1 günlük...',
    additionalImages: [ArrayDataQUBA1Img, ArrayDataQUBA2Img, ArrayDataQUBA3Img, ArrayDataQUBA4Img],
    extendedDescription: 'İyul ayında ALM əməkdaşları üçün KSM tədbirləri çərçivəsində 1 günlük Quba səfəri təşkil olunmuşdur. Səfərdə 100-dən artıq əməkdaş iştirak edərək həm istirahət, həm də komanda ruhunu gücləndirən fəaliyyətlərdə yer almışdır. Bu təşəbbüs əməkdaşların motivasiyasının artırılması və kollektivin birliyinin möhkəmləndirilməsi məqsədi daşıyır.'
  },
  {
    id: 13,
    image: ArrayDataAZTU0Img,
    linkImage: ArrayData2Svg,
    imageTotal: '3',
    dateImage: ArrayData1Svg,
    date: '8 Fevral, 2023',
    title: 'AzTU Rektorunun ALM səfəri',
    description: 'Abşeron Logistika Mərkəzində Azərbaycan Texniki Universitetinin Təlim-Tədris Mərkəzi...',
    additionalImages: [ArrayDataAZTU1Img, ArrayDataAZTU2Img, ArrayDataAZTU3Img],
    extendedDescription: 'Abşeron Logistika Mərkəzində Azərbaycan Texniki Universitetinin Təlim-Tədris Mərkəzi yaradılıb. Bununla bağlı fevralın 8-də Abşeron Logistika Mərkəzinin İdarə Heyətinin sədri Ziya Ağayev və AzTU-nun rektoru Vilayət Vəliyevin rəhbərlik etdiyi nümayəndə heyətləri arasında görüş keçirilib. Görüş zamanı kadr hazırlığı, elmi-texniki tədqiqat məsələləri müzakirə olunub və bununla bağlı işçi qrupu yaradılıb. Abşeron Logistika Mərkəzi ilə əməkdaşlıqda maraqlı olduğunu bildirən Vilayət Vəliyev qarşılıqlı nəzəri və praktiki dərslərin, həmçinin seminarların keçirilməsi ilə bağlı təkliflər səsləndirib. Abşeron Logistika Mərkəzinin İdarə Heyətinin sədri Ziya Ağayev Mərkəzin mütəxəssislərinin universitetin tələbələrinə seminarlar və praktiki dərslərin tədrisi ilə bağlı təklifi müsbət qarşıladığını bildirib.  Mərkəzimiz tələbələrin akademik təhsili zamanı əyani iş təcrübəsi qazanmasını, bununla da müasir tələblərə cavab verəcək kadr potensialının inkişafına töhfə vermək təşəbbüslərini daim dəstəkləyir.'
  
}
    ];


    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [shouldHideNav, setShouldHideNav] = useState(false);
    const [expandedCard, setExpandedCard] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 576) {
                setItemsPerPage(1);
            } else if (width < 768) {
                setItemsPerPage(2);
            } else if (width < 992) {
                setItemsPerPage(3);
            } else if (width < 1200) {
                setItemsPerPage(4);
            } else {
                setItemsPerPage(6);
            }

            setShouldHideNav(ArrayData.length === 6 && width >= 1200);
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

    useEffect(() => {
        const aswContainer = document.querySelector('.asw-container');
        if (aswContainer) {
            if (expandedCard) {
                aswContainer.style.display = 'none';
            } else {
                aswContainer.style.display = '';
            }
        }
    }, [expandedCard]);

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

    const handleCardClick = (card) => {
        setExpandedCard(card);
        setSelectedImageIndex(0);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseExpanded = () => {
        setExpandedCard(null);
        document.body.style.overflow = 'auto';
    };

    const handleNextImage = () => {
        if (expandedCard && expandedCard.additionalImages) {
            setSelectedImageIndex(prev =>
                prev === expandedCard.additionalImages.length - 1 ? 0 : prev + 1
            );
        }
    };

    const handlePrevImage = () => {
        if (expandedCard && expandedCard.additionalImages) {
            setSelectedImageIndex(prev =>
                prev === 0 ? expandedCard.additionalImages.length - 1 : prev - 1
            );
        }
    };

    const visibleItems = ArrayData.slice(currentIndex, currentIndex + itemsPerPage);
    const isAtStart = currentIndex === 0;
    const isAtEnd = currentIndex >= ArrayData.length - itemsPerPage;

    return (
        <div className="section-column" onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>

            <p className='Title-Header'>Fəaliyyətimiz</p>

            <div className="Section-Card-Group">
                <div className='Card-Left No-Select'>
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
                        <div
                            className="Cards Main-Card"
                            key={item.id}
                            onClick={() => handleCardClick(item)}
                        >
                            <div className="Cards-Item ">
                                <img src={item.image} className='No-Select Section-Images ' />
                            </div>
                            <div className="Cards-Item">
                                <div className="Cards-Item-Bio-Group">
                                    <div className="Cards-Item-Bio">
                                        <img src={item.dateImage} className='No-Select' />
                                        <p>{item.date}</p>
                                    </div>
                                    <div className="Cards-Item-Bio">
                                        {/* <img src={item.linkImage} className='No-Select ' />
                                        <p>{item.imageTotal}</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="Cards-Item">
                                <p>{item.title}</p>
                                <p>{item.description}</p>
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


            {expandedCard && (
                <div className="expanded-card-overlay">
                    <div className="expanded-card-content">
                        <button className="close-expanded" onClick={handleCloseExpanded}>
                            <img src={CircleCloseImg} alt="Close" />
                        </button>

                        <div className="expanded-card-main">
                            <div className="expanded-card-image">
                                <img
                                    src={expandedCard.additionalImages[selectedImageIndex]}
                                    alt={expandedCard.title}
                                    className='expanded-card-image-main'
                                />
                                {expandedCard.additionalImages.length > 1 && (
                                    <>
                                        <button className="image-nav prev" onClick={handlePrevImage}>
                                            <img src={ChevronCircleLeftActiveImg} alt="Previous" />
                                        </button>
                                        <button className="image-nav next" onClick={handleNextImage}>
                                            <img src={ChevronCircleRightActiveImg} alt="Next" />
                                        </button>
                                    </>
                                )}
                            </div>

                            <div className="expanded-card-details">
                                <div className="expanded-card-header">
                                    <h3>{expandedCard.title}</h3>
                                    <div className="expanded-card-meta">
                                        <div className="meta-item">
                                            <img src={expandedCard.dateImage} alt="Date" />
                                            <span>{expandedCard.date}</span>
                                        </div>
                                        <div className="meta-item">
                                            <img src={expandedCard.linkImage} alt="Images" />
                                            <span>{expandedCard.imageTotal} images</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="expanded-card-description">
                                    <p>{expandedCard.extendedDescription}</p>

                                </div>

                                <div className=" CardSocialCard">
                                    <p>Yeniliklərə bağlı bizi sosial şəbəkələrdən izləyin:</p>
                                    <div className="CardSocial">
                                        <img src={igSocialImage} />
                                        <img src={fbSocialImage} />
                                        <img src={inSocialImage} />
                                        <img src={xSocialImage} />
                                    </div>

                                </div>

                                {expandedCard.additionalImages.length > 1 && (
                                    <div className="expanded-card-thumbnails">
                                        {expandedCard.additionalImages.map((img, index) => (
                                            <div
                                                key={index}
                                                className={`thumbnail ${index === selectedImageIndex ? 'active' : ''}`}
                                                onClick={() => setSelectedImageIndex(index)}
                                            >
                                                <img src={img} alt={`Thumbnail ${index + 1}`} />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Activity;