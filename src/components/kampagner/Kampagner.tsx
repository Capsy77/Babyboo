import './kampagner.scss';
import skabe from '../../assets/img/Classic_skabe.jpg';
import wally from '../../assets/img/Wally_pusleborde.jpg';
import tekstiler from '../../assets/img/Alle_tekstiler.jpg';


const Kampagner = () => {

    return(
        <div className='kampagner_container'>
            <div className='kampagner-name'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z"/></svg>
                <p>Kampagner</p>
            </div>
            <div className='kampagner_picture-list'>
                <div className='kampagner_picture-box'>
                    <div className='kampagne-picture-text'>
                    <img src={skabe} alt='' />
                    </div>
                    <h4>August 2022 - september 2022</h4>
                    <div className='kampagne_picture-button'>
                        <p>Classic senge og skabe</p>
                        <button>Gå til kampagne →</button>
                    </div>
                </div>
                <div className='kampagner_picture-box'>
                    <div className='kampagne-picture-text'>
                    <img src={wally} alt='' />
                    </div>
                    <h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64V75c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32H64 320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V437c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 64 32zM96 75V64H288V75c0 25.5-10.1 49.9-28.1 67.9L192 210.7l-67.9-67.9C106.1 124.9 96 100.4 96 75z"/></svg>Oktober 2022</h4>
                    <div className='kampagne_picture-button'>
                        <p>Wally pusleborde</p>
                        <button>Gå til kampagne →</button>
                    </div>
                </div>
                <div className='kampagner_picture-box'>
                    <div className='kampagne-picture-text'>
                    <img src={tekstiler} alt='' />
                    </div>
                    <h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64V75c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32H64 320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V437c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 64 32zM96 75V64H288V75c0 25.5-10.1 49.9-28.1 67.9L192 210.7l-67.9-67.9C106.1 124.9 96 100.4 96 75z"/></svg>December 2022</h4>
                    <div className='kampagne_picture-button'>
                        <p>Alle tekstiler</p>
                        <button>Gå til kampagne →</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kampagner;