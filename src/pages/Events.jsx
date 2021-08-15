import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import EventCard from "../components/EventCard";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import logo_pursuit from "../assets/event_logos/logo_pursuit.jpg";
import domain_dude from "../assets/event_logos/domain_dude.jpeg";
import quibble from "../assets/event_logos/quibble.jpg";
import codigo from "../assets/event_logos/codigo.jpg";
import bgmi from "../assets/event_logos/bgmi.jpeg";
import talen_di_sadee from "../assets/event_logos/talen_di_sadee.jpeg";
SwiperCore.use([Autoplay, Navigation, Scrollbar, A11y]);

const MemoedEventCard = memo(EventCard);

function Events() {
  return (
    <>
      <div className="p-3 lg:p-8 bg-opacity-0">
        <div className="lg:ml-8 lg:mr-8">
          <h2 className="m-1 text-xl">Events</h2>
          <Swiper
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            slidesPerView={window.innerWidth < 800 ? 1 : 3}
            spaceBetween={10}
            navigation={true}
            //scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <MemoedEventCard
                title="TALEN-DI-SADEE"
                desc="It is a place to show your innovative ideas through your presentations"
                logo={talen_di_sadee}
                detail=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <MemoedEventCard
                title="CO-DI-GO"
                desc="Your coding skills and programming knowledge will be put into test"
                logo={codigo}
                detail="<b>Round 1:</b><br><br>
                1. Round 1 will be in the form of Multiple Choice Questions.<br>
                2.The questions should be answered within the given time-limit.<br>
                3. There is no negative marking.<br>
                4. The selected candidates will proceed to round 2.<br><br>
                
                <b>Round 2:</b><br><br>
                1. This round will test the participant's coding skills.<br>
                2. Each participant will be given a problem.<br>
                3. The participants have to clear the test cases, in the given time.<br><br>

                <b>General Instructions:</b><br>
                            1. Participants should turn on the video and audio.<br>
                            2. Judges decisions will be final.<br>
                            3. Meeting platform - Microsoft Teams.<br><br>
                            
              <b>Event organisers:</b><br>
                            R. Harikrishna - <a href='tel:8870587699' class='underline'>8870587699</a><br>
                            P. Gnanasekar - <a href='tel:9789936778' class='underline'>9789936778</a><br>
                            S. Arulraj -  <a href='tel:9789691577' class='underline'>9789691577</a><br>
                            P. Harish Kumar -  <a href='tel:7358288392' class='underline'>7358288392</a><br>"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MemoedEventCard
                title="LOGO PURSUIT"
                desc="Explore the identity behind the brand symbols which represents your vision."
                logo={logo_pursuit}
                detail="<b>Round 1 -</b> Reason behind the logo<br><br>
                            1. Each participant will be shown two logo.<br>
                            2. Participants need to identify, abbreviate and tell the reason behind the logo.<br>
                            3. The marks allotment will be classified into three division (identify, abbreviation and reason).<br>
                            4. Timings will be 2 minute for each participants.<br>
                            5. Shortlisted candidates will participate in round 2.<br><br>

                            <b>Round 2 –</b> Six-logos<br><br>
                            1. Participants have to choose random number under which they will be given six-logos to identify. <br>
                            2. Each participant will be given 1 minute for this round.<br><br>

                            <b>General Instructions:</b><br>
                            1. Participants should turn on the video and audio during their turn.<br>
                            2. Judges decisions will be final.<br>
                            3. Meeting platform-Microsoft Teams.<br>
                            4. Check your spam messages.<br><br>
                            
                            <b>Event organisers:</b><br>
                            S. Jaya kumar - <a href='tel:9940034885' class='underline'>9940034885</a><br>
                            K.S Aakash - <a href='tel:9952597968' class='underline'>9952597968</a><br>
                            P. Harish -  <a href='tel:7358821566' class='underline'>7358821566</a><br>"
              />
            </SwiperSlide>
            <SwiperSlide>
              <MemoedEventCard
                title="BGMI_SURVIVE"
                desc="Jump into the virtual world with friends to survive and finish off your opponents"
                logo={bgmi}
                detail=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <MemoedEventCard
                title="QUIBBLE'21"
                desc="Synchronize your tech intelligence with timezone, Keep Calm And Crack The Quiz"
                logo={quibble}
                detail=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <MemoedEventCard
                title="DOMAIN DUDE"
                desc="The Art of Hiring to breathe art into your projects, Code the web !"
                logo={domain_dude}
                detail=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* <div className="horizontal-scroll overflow-scroll">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div> */}
      </div>
    </>
  );
}

export default Events;
