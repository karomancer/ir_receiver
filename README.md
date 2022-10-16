# TV Remote Control Project

> Don't know what this is about? See the [final video here](https://twitter.com/karomancer/status/1573610772843925504) then decide whether you want to read how it was made!

This semester, I took a class called **[Learning the World, One Thing at a Time](https://www.coursicle.com/nyu/courses/ITPGGT/2345/)**, taught by [Lydia Jessup](https://www.lydiajessup.me/). The title is inspired by a blog post by [Joe Dumit](https://anthropology.ucdavis.edu/people/dumit), a professor of anthropology at UC Davis, called [WRITING THE IMPLOSION: Teaching the World, One Thing at a Time](http://doingsts.com/cms/wp-content/uploads/2018/10/dumit-implosion.pdf). 

The purpose of this class was to learn the [Implosion](https://www.trashacademy.org/implosion) research method to deeply analyze and research an object we encounter in every day life.

You might be thinking, “Ok, but what’s the point of doing so, especially for an object we’re all already familiar with?”

Sounds like a basic question, but let’s ask a follow-up: how familiar are we *really* with objects we use in everyday life?

---

<blockquote>
<h3>⚠️ Don't care about the Implosion Method or the history of the remote? ⚠️</h3>
Just want to see the tech goodies and implementation?
<a href="#technology--presentation">Jump ahead here to the implementation</a>! Don't worry, I won't judge.
</blockquote>

---

## Every Object has a Story and Lifecycle

The world we live in today is more complex than ever before. Many scholars and thinkers of our time are deeply examining how we produce and use objects today versus in the past.

[Donna Haraway](https://en.wikipedia.org/wiki/Donna_Haraway), a scholar in many intersecting fields such as ecofeminist theory and technology, wrote a book called [Staying with the Trouble](https://www.amazon.com/Staying-Trouble-Chthulucene-Experimental-Futures/dp/0822362244) that explores the art of creation, and human relationships with non-humans. That is, how do we create and interact with other species, objects, and our earth? How do our actions affect our world around us? Or as she likes to ask, how can we reconfigure the human relationship with the earth and its inhabitants?

Similarly, geographers [Josh Lepawsky](https://discardstudies.com/authors/josh-lepawsky/) and [Max Liboiron](https://maxliboiron.com/) wrote [Discard Studies: Wasting, Systems, and Power](https://direct.mit.edu/books/oa-monograph/5337/Discard-StudiesWasting-Systems-and-Power), which takes a deep dive into the systems that surround our every day practices of using utilities we take for granted, like our electrical grid, recycling, and garbage programs. It dives into subjects such as the pollution caused by recycling and how much money is spent to reuse. Most of us will gladly place items in recycling bins or turn on a light switch without much thought, but what effect does it really have?

In addition to these side effects of production and use, we can also look at anthropological and historical aspects of objects and systems. 

The obvious choice is the history of the object: who invented it, why was it invented, how expensive was it, what did it look like, and so on. The less obvious choice is not only exploring its beginnings, but also its decay.

There is an idea of a technological hype cycle, created by the [Gartner Group](https://www.gartner.com/en/research/methodologies/gartner-hype-cycle?utm_source=google&utm_medium=cpc&utm_campaign=GTR_NA_2022_GTR_CPC_SEM1_BRANDCAMPAIGNMQ&utm_adgroup=141653137818&utm_term=gartner%20hype%20cycles&ad=618363632096&matchtype=e&gclid=EAIaIQobChMI0enzrYfN-gIVBsmUCR00GAZCEAAYASAAEgKj2fD_BwE). It introduces the idea that new media, or in our case objects, follow this cycle on a graph plotting hype and usage against time. The idea is that the newly invented and released will spike in adoption by early adopters that champion the object, then it will live a commodity phase where its usage plateaus, and finally it enters an archaeology phase, where it becomes [Zombie Media](https://jussiparikka.net/2012/09/05/zombie-media-in-leonardo/) and either is replaced, rarely used, or only used by hobbyists:

![Graph courtesy of [Garnet Hertz](http://www.conceptlab.com/)](https://user-images.githubusercontent.com/482817/196012586-40c1ac1e-229d-4805-933f-a3824d54b889.png)

Graph courtesy of [Garnet Hertz](http://www.conceptlab.com/)

So with these ideas, we can finally jump into The Implosion Method.

# Quick and Dirty Guide to the Implosion Method

The implosion method was pioneered by Donna Haraway on the very ideas just discussed. An object has its own lifecycle and story, and we can to begin to uncover it by researching across 14 dimensions:

| | |
| -- | -- |
| <h3>Labor</h3><p>How was it produced and who is involved in it production? Where and how does this happen? How is it used or how is using it seen as labor?</p> | <h3>Professional</h3><p>How is knowledge of the production and use of this object professionalized? What kinds of professionals or institutions are involved regarding its development, production, use and regulation?</p> |
| <h3>Material</h3><p>What materials are involved in its production and maintenance? Where have these materials come from and how are they disposed of?</p> | <h3>Technological</h3><p>What kinds of technologies and machines enable it to be produced and maintained? Who has access to these machines and technologies and what are their histories?</p> |
| <h3>Context</h3><p>Where and how does it appear in the world? What can be found around it? What activities or ways of life enable one to come across it? Who is it for (Who is the audience? Who is excluded)?</p> | <h3>Political</h3><p>What kinds of local, national and international organizations claim jurisdiction or play a part in regulating it? What kind of legislation or political discourse surrounds it? What political history or power structures is it involved in?</p> |
| <h3>Economic</h3><p>How is it marketed, purchased, consumed? Where and by whom? What kinds of capital, debt, credit, risks and labor relations are involved in this process? How is it part of the world marketplace?</p> | <h3>Textual</h3><p>What texts are on, associated or related to it? Who writes these texts and who reads them? What does the text mean?</p> |
| <h3>Bodily</h3><p>What kinds of bodies (human and nonhuman) are related to it, make use of it or produce it? How do these interactions relate to or embody gender, race, ability and other group identifications? What forms of attention, emotion and cognition are involved?</p> | <h3>Historical</h3><p>What is the history of its invention (when and by whom)? Are there different and competing versions of its histories? Who tells or owns these histories?</p> |
| <h3>Particle</h3><p>How can the object be divided up or broken down into its smallest units? What are its parts? What are its stages?</p> | <h3>Educational</h3><p>When did we learn about it in school? During the rest of life? What do we learn about it and what is the history of its teaching? How much do we learn about it?</p> | 
| <h3>Mythological</h3><p>What roles does it play in fantasies? How does it appear in entertainment? What other narratives, stories, and strong associations involve it (ex: joy, fear, science, parenthood, death, sports)?</p> | <h3>Symbolic</h3><p>What are the ways it is used as a symbol? What sorts of ideas, metaphors, movements and ideologies are associated with it? How is this part of a larger system or history? For whom is this relevant and by whom is this debated?</p> |


If we’re following the method exactly we would fill out an implosion method map, by selecting our chosen dimensions, writing what we already know, identifying the gaps we might have, then creating a plan of attack with research.


![Implosion Method Map](https://user-images.githubusercontent.com/482817/196012607-e05c22f7-9070-420a-ac9e-196d33e3e018.png)

Implosion Method Map

Really, the Implosion Method implores us to ask two questions about our chosen object:

1. How does the object exist in the world?
2. How does the world exist within the object?

# Research

We had one week to choose an object and study it across 2+ dimensions and use 2+ different research sources, such as archives, interviews, or surveys. 

I chose a Zenith TV remote I found on a junk shelf for my chosen object. I studied Human-Computer Interaction and am always excited to learn more about interaction devices, so it seemed like a perfect fit! I also wanted to choose something that we all take for granted and use most days.

I chose to study the **history** of the TV remote, as well as the **technology** behind it. If I had time, I would also look at **context** and **mythological.** All of these dimensions are interwoven.

As per the Implosion Method, I started by making a Knowledge Map of what I already knew:

![My initial knowledge map; a list of all 14 dimensions and what I already know about them. I highlighted History, Technology, Context, and Mythology](https://user-images.githubusercontent.com/482817/196012633-b6efdabd-4440-4c37-a1db-6fd17fe3c4bd.png)
My knowledge map, with the dimensions I’d like to focus on highlighted

I started my process by tearing apart my remote to see the components inside:

| | |
| --- | --- |
| <img src="https://user-images.githubusercontent.com/482817/196012675-245fa9e3-70ad-42af-89ff-0b5b25bb6aa5.png" alt="A picture of a Zenith TV remote laying on a white table"/> | <img width="50%" alt="The same Zenith remote, taken apart so the cover, the circuit board, and the back cover are lying next to each other side-by-side on the white table" src="https://user-images.githubusercontent.com/482817/196012697-a5abc358-6417-4f28-9604-6e1443ae93b3.jpeg" /> |

Unfortunately, I wasn’t able to find out which exact model of remote I had, and the serial numbers were scratched off the back. I did find out it uses infrared sensors to operate, which is a later development in the invention of remotes. Speaking of…

## History and Technology

Let’s talk about the history of the remote!

| | |
| -- | -- |
| ![Untitled 4](https://user-images.githubusercontent.com/482817/196012742-3ee3d7e0-c300-4133-94e6-6173b37045b4.png)<br>Source: [Engadget](https://www.engadget.com/2014-01-19-nikola-teslas-remote-control-boat.html?guccounter=1) |  <b>1898 - The first remote</b><br>Nikola Tesla demos the first remote controller at the New York's Madison Square Garden. He used radio frequency (RF) to control a toy boat on an indoor pool. He named is remote-controllable boat a [teleautomaton](https://31648663.weebly.com/teleautomaton.html). Many deemed his invention as magic and many criticized it for its potential to be used in warfare. |
| ![Untitled 5](https://user-images.githubusercontent.com/482817/196012776-9d279672-30e1-433a-bf19-3a9bc6e4afcd.png)<br>![Untitled 6](https://user-images.githubusercontent.com/482817/196012786-75cc81bd-6a42-4fac-9399-cce9a0dbeefb.png)<br>Source: [Google Arts & Culture](https://artsandculture.google.com/story/telekino-the-first-remote-control-museo-torres-quevedo/GQWBy6_ArC-_Ig)| <b>1902 - A remote fit for a king</b><br>Leonardo Torres-Quevedo creates what he calls the “Telekino”, a remote control for vehicles. Unlike Tesla’s radio waves, which were able to spread farther distances and omnidirectionally, these used telegraph transmitters. His original demo in 1902 was on a tricycle.<br><br>Torres-Quevado originally invented the telekino in mind for navigating dangerous vehicles to save human lives, such as hydrogen-filled airships. In 1905, it was demoed on a real boat with real passengers in the presence of King Alfonso XIII.|
|  ![Photograph of a Keterring Bug](https://user-images.githubusercontent.com/482817/196012793-4eda8535-8b4e-41cb-a8b6-9389adc6a530.png)<br>Kettering Bug. (Source: [Military History Now](https://militaryhistorynow.com/2012/09/09/war-by-remote-control-2500-years-of-unmanned-vehicles/)) | <b>1932 - Unmanned WWII vehicles</b><br>Concerns about remote-controlled vehicles becoming weapons in war came as the Germans created RF boats filled with explosives designed to collide into enemy ships.<br>Others also experimented with unmanned war vehicles. The United States made an unmanned aerial torpedo called the [Kettering Bug](https://en.wikipedia.org/wiki/Kettering_Bug). These used a similar radio frequency technology that Tesla’s original RC boat did to allow pilots to control torpedos after launching them. |
| ![Untitled 8](https://user-images.githubusercontent.com/482817/196012842-78c640cf-1d88-452e-9155-b6b06d6d7cc1.png)<br>Source: [Philco Repair Bench](https://www.philcorepairbench.com/philco-mystery-control/) | <b>1930s - Radio remote controls</b><br>In the same years remote controls were being used for warfare, radio companies were releasing controllers for their radio sets. Many of the first ones were wired and controlled through the house AC line.<br><br>In 1939, the Philadelphia Storage Battery Company (Philco) created the first wireless remote control for the radio, the **Philco Mystery Control.** This remote also used RF technology.<br><br>As per the Gartner Group Hype graph we saw earlier, the Mystery Control was wildly popular and adopted quickly between 1939 and 1942. Once the hype died down, it became a commodity and other radio companies followed suit. |
| ![Untitled 9](https://user-images.githubusercontent.com/482817/196012875-937b694f-62cc-44a0-a446-eac7a930699d.png)<br>Source Electronic House/[TVHistory.tv](http://tvhistory.tv/) | <b>1950s - Wired TV remotes</b><br>Zenith invented the first TV remote, the Lazy Bones, and released it in 1950.<br>Unfortunately, just like how radio started with wired remote controls, so did TVs. Lazy Bones was not a raving success because of the inconvenience of the long, snaking wire. |
| ![Untitled 10](https://user-images.githubusercontent.com/482817/196012889-c750dcd9-3a97-47bf-933c-92c1351e8c02.png)<br>Source: LG Electronics/European Pressphoto Agency | <b>1955 - First wireless TV Remote</b><br>Eugene Polly, a researcher and engineer from Zenith, invents the first wireless TV Remote, the [Flash-matic](https://en.wikipedia.org/wiki/Zenith_Flash-matic).<br><br>The Flash-matic used light to relay signals. Each TV was equipped with photocells in each of the four corners that detected beams of light, encoded with the instruction, emitted from the remote. The concept of a completely wireless TV remote was a game changer, but the technology was short-lived.<br><br>The Flash-matic suffered from light conflicts as well as a huge steep tag, so it didn’t last long on the hype chart. |
| ![Untitled 11](https://user-images.githubusercontent.com/482817/196012899-5d2140be-3b11-437e-b53c-8d9658a6d867.png)<br>Source: Alamy | <b>1956 - Invention of the “clicker”</b><br>Robert Adler, a physicist, invents the Zenith Space Commander.<br><br>Instead of using light or RF, Space Command TVs detected sounds produced by physical hammers in the remote. The remote didn’t require batteries because of this implementation, and each remote produced a satisfying clicking sound in addition to an ultrasonic sound inaudible to most humans. In fact, this is the reason why we call remotes “clickers” today!<br>This ultrasonic technology served as the primary tech in TV remotes until the mid ‘80s, when infrared remotes started taking over the scene. |
| ![Untitled 13](https://user-images.githubusercontent.com/482817/196012913-380b4222-f2d8-4b1b-ad09-08b028731c4a.png)<br>Source: [TimeToast](https://www.timetoast.com/timelines/the-remote-control-acd2c245-e27f-47a0-8946-8a64bdf61dc6) | <b>1973 - Teletext and multi-button remotes</b><br>Up to this point, remotes only included a handful of buttons for volume, next channel, previous channel, on and off. <br><br>In the ‘70s, BBC introduced the [Ceefax](https://en.wikipedia.org/wiki/Ceefax) teletext service. [Teletext](https://en.wikipedia.org/wiki/Teletext) was a type of service that broadcasted metainformation about programming to TVs, showing it as a fact sheet overlay on the screen. To operate the overlay, more buttons had to be added to TV remotes. This included the numpad we’re so familiar with today. |
| ![Untitled 14](https://user-images.githubusercontent.com/482817/196012928-8f1dc82b-faac-4f14-8bbb-90ce1d0b1aec.png) | <b style="font-size: 1.5rem">1980 - First infrared remotes</b><br>Though ultrasonic, and other sound-based “clickers”, were still the most popular remote technology, they suffered from some major issues. Many of them would irritate house pets and children because of their high frequencies. Meanwhile, other light-based remotes experienced interference by indoor light sources like lamps.<br><br>Infrared was already being used for other household uses, such as garage door openers. Engineer Paul Hrivnak at Canadian company, Viewstar, Inc., applied that tech and produced the first infrared TV remote for Phillips priced at $190CAD.<br><br>Infrared became so wildly popular, they quickly rose in popularity beating out the previous ultrasonic remotes. |
| ![Untitled 15](https://user-images.githubusercontent.com/482817/196012938-68f19382-e583-495d-8c68-29e8231cc613.png)<br>Source: [Tedium](https://tedium.co/2017/05/25/universal-remote-control-history/) | <b style="font-size: 1.5rem">1985 - Universal remotes</b><br>The idea of a reconfigurable remote that can control multiple devices was patented by Philips in 1985, and soon thereafter they released their Magnavox universal remotes.<br><br>In 1986, General Electric also patented a reconfigurable universal remote, stating that a remote should be able to control a television, a cable converter, video cassette recorder, and a video disc player so to remove confusion and inconvenience to the user. |
| ![Untitled 16](https://user-images.githubusercontent.com/482817/196012948-940eab10-669d-4bdf-890f-8210e8ea43cf.png)<br>Source: [“Remote Control for All TV” on Google Play](https://play.google.com/store/apps/details?id=com.remote.control.universal.forall.tv&hl=en_US&gl=US) | <b>Early ‘00s - Swimming in remotes</b><br>Households in pre-smartphone America often had five or six remotes, including one for cable or satellite receiver, VCR or digital video recorder (DVR/PVR), DVD player, TV and audio amplifier. Universal remotes became more and more common, but devices were appearing quicker than remotes could even keep up with them. |
| ![Untitled 17](https://user-images.githubusercontent.com/482817/196012962-32058a36-2a91-4598-9f6b-df2eee123940.png)<br>Sources:  [“TV Remote” on the App Store](https://apps.apple.com/us/app/tv-remote-universal-control/id1539090879) | <b style="font-size: 18px;">‘10s to now - Smart TVs, Bluetooth, and apps</b><br>Today, the default technology for TV remotes is still infrared, however more technologies are emerging as the broadcast television landscape is changing.<br><br>In the mid 2000’s, the Apple TV Siri remote was released, which had a trackpad instead of buttons, supported voice control, and used Bluetooth technology instead of infrared.<br><br>Around the same time, Roku, Google Chromecast, and Amazon Firestick were all released, most now supporting phone app navigation, usually through Bluetooth or WiFi. <br><br>TV remotes have really come a long way! | 

# Technology & Presentation

One of the requirements of this class was to present our findings in any way we’d like without using a slide deck. 

I thought a fun way to present the history, context, and mythology of the TV remote was to create a “TV” that receives messages from a TV remote and flips between “channels”, each showing a different piece from the history of the remote control.

I poked around on YouTube after learning the history of the remote, and created a playlist of videos I’d like to act as the base of my TV programming.


[![Screenshot of a YouTube playlist with videos including the history of the remote, Nikola Tesla's inventions, and many videos of old Zenith remote commercials.](https://user-images.githubusercontent.com/482817/197138139-2a4937f2-648b-4dd0-9137-29517d0d4b40.png)](https://www.youtube.com/playlist?list=PLTELw9BZacuGbILIa2EB_dQ_zukHCnlJn)


Ideally, a person could surf between channels with the remote, and go between these videos (with some added effects)!

So it’s kind of like a slide deck, but much more highly engineered.

Pretty meta, huh?

To top it off, I also wanted it to be a bit of a comedic piece and make the TV a little unpredictable, complete with static and some random aspects. Haven’t we all surfed around, looking for the right channel, or fought with our TV volumes?

**All right I’m sold. Let’s build a fake TV!**

Though many new technologies for remotes are emerging, infrared is still the default and prevailing technology from the ‘80s until now. So let’s make a TV that responds to an infrared remote. In fact, let’s make one that responds to the Zenith remote that I found in the junk shelf!

In order to build our fake TV that is operated by an infrared remote, we need to be able to receive infrared messages.

So what is infrared and how does it even work?

### What is infrared?

Infrared radiation (IR) is a band on the electromagnetic radiation spectrum above the visible red spectrum, thus imperceptible to the human eye. It operates on wavelengths between ~700 nm and 1 mm:

![Untitled 20](https://user-images.githubusercontent.com/482817/196013091-29f057eb-8ab4-4c18-9014-956658a2f9d9.png)

Because its wavelengths are beyond the perceptible realm, it usually does not interfere with the visible light spectrum. This makes it a much more ideal choice for remote technology than others relying on light, like the Zenith Flash-matic remote.

You’ve probably noticed your IR remotes actually have a little LED attached to them. This is called an **infrared emitter:**

[Taking apart my Zenith TV remote to show what the infrared LED really looks like and how it is connected to the board.](https://user-images.githubusercontent.com/482817/197114261-b3ace8cf-8eb6-4903-a291-0a02b0fe0168.mov)

Taking apart my Zenith TV remote to show what the infrared LED really looks like and how it is connected to the board.

You can’t see it, but every time you click a button on your TV remote, it sends a pattern of blinks with that light. If you are interested, you can actually try holding your camera up to it and clicking a couple buttons to see it flash. Not all cameras are able to detect it, however!

Your TV has an **infrared receiver**, which is a small sensor that is able to detect these blinking patterns. Unlike other technologies like Bluetooth or radio frequency, this receiver needs an unobstructed path to the emitter. It needs to *see* the light as it blinks. This is why your TV remote will not work in another room or with too many people in the way!

The microprocessor within your TV is able to use this receiver to detect the blinks, and in turn decode them into commands. Similar to how a series of dots and dashes in Morse code denote a letter, a series of blinks denote different commands. 

There have been many protocols over history, like [Phillips’ RC-5](https://techdocs.altium.com/display/FPGA/Philips+RC5+Infrared+Transmission+Protocol) and [NEC’s transmission protocol](https://techdocs.altium.com/display/FPGA/NEC+Infrared+Transmission+Protocol), that many devices used. RC-5 was more well defined; any receiver could receive a code following that protocol and know exactly what was meant. NEC’s, on the other hand, included adding in headers so each manufacturer could specify custom codes. If you read the links above, you can see how they were defined as lengths of time of being on and off in µs. It’s actually super interesting!

## Creating the plan

Now that we understand what is involved with infrared, we can map out what needs to be done in our project.

When a person presses a button on the Zenith remote, the IR emitter of the remote will send out a series of quick blinks following a protocol. We need an IR receiver to detect these blinks, and some code to decode them to know what button the person pressed. These two steps will be done on our Arduino Nano. 

I initially wanted my entire project to be self contained, with just a microcontroller and a monitor (no computer), but I didn’t receive my Raspberry Pi Pico quickly enough to do so. The next best thing I could do was have my Arduino Nano tethered to my computer use my computer screen as a TV.

In order for my Arduino Nano to communicate to my computer, I would have to relay messages across a serial port. In this case, I would print my remote commands over 9600 baud to be received by another program, running on my computer. This program will have to be listening to the serial port for incoming messages, then execute code in response to every message.

Here’s a visual representation of the flow we want to achieve here:

![Frame_5_(1)](https://user-images.githubusercontent.com/482817/196013100-c9fcfd17-69d0-48f9-a588-5eb3e45712c4.jpg)

Ok, onto the first few hardware steps on receiving IR messages!

## Receiving infrared messages

Luckily for me, we don’t need to know the protocol because nowadays, we have handy dandy libraries to do the decoding for us!

To receive messages, we need an…

…

Infrared receiver! That’s right.

Also luckily for me, infrared receivers are extremely cheap on [Adafruit](https://www.adafruit.com/product/157):

<img width="800" src="https://user-images.githubusercontent.com/482817/196013155-25bba191-e032-4787-ae6d-13891b17e97f.png" alt="Sales page for an IR receiver on Adafruit showing a picture of the receiver next to a price of $1.95">

Using an Arduino NANO, I just needed to make a simple circuit. An IR receiver has 3 pins: one for power, one for ground, and one for digital out.

I got inspiration form [this handy article](https://www.elithecomputerguy.com/2019/06/ir-sensor-digital-output-on-arduino/) to make something very basic:

<img width="50%" alt="Photo of simple circuit with an Arduino hooked up to an IR receiver. The IR receiver only has 3 pins...data out, source, and ground." src="https://user-images.githubusercontent.com/482817/196013104-f05a0527-1ba1-404a-bf04-0eb68bdd4932.png" />

Using the `[IRremote.h](https://www.arduino.cc/reference/en/libraries/irremote/)` package for Arduino, I was able to easily set up a simple program that was able to detect values sent from the emitter.

This package transforms the decoded messages into hexadecimal, which we can store as `unsigned long int`  and simply compare like any regular integer.

I didn’t know what protocol my remote used, so the easiest thing I could imagine was to simply print what the receiver got in hexadecimal for each button, and create constants to compare against in the future.

```arduino
#include <IRremote.h>

const int IR_RECEIVER = 8;

IRrecv irrecv(IR_RECEIVER);
decode_results results;

void setup() {
  irrecv.enableIRIn(); // Start the receiver
}

void loop() {
  if (irrecv.decode(&results)) {
			// Here we can print out what we receive and build out a giant 
			// switch statement in the future
      Serial.println(results.value, HEX);
      ...
      irrecv.resume(); // Receive the next value
  }
}
```

From this, I would get values like `0xEF1000FF` when I clicked the channel up button on the remote. After doing this for all the buttons I wanted to work with, I finalized my list of constants:

```arduino
const unsigned long CHANNEL_UP = 0xEF1000FF;
const unsigned long CHANNEL_DOWN = 0xEF10807F;
const unsigned long HELD_BUTTON = 0xFFFFFFFF;
const unsigned long POWER_BUTTON = 0x61A0F00F;
const unsigned long SUPER_POWER_BUTTON = 0xEF1010EF;
const unsigned long VOLUME_UP = 0xEF1040BF;
const unsigned long VOLUME_DOWN = 0xEF10C03F;
const unsigned long MUTE = 0xEF10906F;
```

This list of constants will differ from remote to remote, so if you decide to do a similar project, copy pasting probably wouldn’t work!

I could relay these hex values as-is over my serial port for my future TV application to interpret, but for the sake of readability, I decided to encode them into plain English constants, with the same name as the constant names above. 

In the end, this is what I ended up with on the Arduino side of things:

```arduino
#include <IRremote.h>

const int IR_RECEIVER = 8;

const unsigned long CHANNEL_UP = 0xEF1000FF;
const unsigned long CHANNEL_DOWN = 0xEF10807F;

// HELD_BUTTON was sent when any button was held down
// Think like holding down CHANNEL_UP to surf channels quicker
const unsigned long HELD_BUTTON = 0xFFFFFFFF; 
const unsigned long POWER_BUTTON = 0x61A0F00F;
const unsigned long SUPER_POWER_BUTTON = 0xEF1010EF;
const unsigned long VOLUME_UP = 0xEF1040BF;
const unsigned long VOLUME_DOWN = 0xEF10C03F;
const unsigned long MUTE = 0xEF10906F;

IRrecv irrecv(IR_RECEIVER);
decode_results results;

void setup() {
  irrecv.enableIRIn();
}

void loop() {
  if (irrecv.decode(&results)) {
    unsigned long buttonAction = results.value;
    
    switch (buttonAction) {
      case CHANNEL_UP:
        Serial.println("CHANNEL_UP");
        break;
      case CHANNEL_DOWN:
        Serial.println("CHANNEL_DOWN");
        break;
      case POWER_BUTTON:
        Serial.println("POWER_BUTTON");
        break;
      case SUPER_POWER_BUTTON:
        Serial.println("SUPER_POWER_BUTTON");
        break;
      case HELD_BUTTON:
        break;      
      case VOLUME_UP:
        Serial.println("VOLUME_UP");
        break;
      case VOLUME_DOWN:
        Serial.println("VOLUME_DOWN");
        break;
      case MUTE:
        Serial.println("MUTE");
        break;
      default:
				// Limiting messages received to only the above
				break;
    }

    irrecv.resume(); // Receive the next value
  }
}
```

## Writing the TV Application

Call me crazy, but I decided to write my TV application with [Electron](https://www.electronjs.org/), a framework that allows you to use your existing web dev skills in JavaScript, HTML, and CSS to create desktop applications.

A funny thing about this is that the [new Arduino IDE](https://www.arduino.cc/pro/arduino-pro-ide), very recently released, [is written in Electron](https://joshondesign.com/2014/06/17/electron). 

Funny world.

Though I have over a decade experience of writing JavaScript applications, I had never written in Electron, and I only had one day to write an application. I didn’t end up doing it in the cleanest or best way possible, but I thought it was clever. 

So here’s what I did.

### Creating TV “channels”

In Electron, different views are usually different HTML files.

Each channel would have to have its own HTML page, and each channel change command from the remote would have to load a new page. Channel pages would essentially just be a `<video>` tag with a universal CSS stylesheet to make it full screen.

What I did to create channels was first I downloaded a ton of videos, each to represent a channel, and put them in a `videos` directory. 

I then created a script called `gen_channels.ts` that would automatically take all videos in the `videos` directory and create HTML pages for each one.  Every application build automatically runs this script.

<div style="display:flex;">
<img width="301" alt="Screenshot of IDE, showing directory structure of each of the video files. 1.mp4, 2.mp4, 3.mp4..." src="https://user-images.githubusercontent.com/482817/196013109-f8fd4379-bd77-4646-a5f7-f3c5b300ffe3.png">
<img width="316" alt="Screenshot of IDE, showing directory structure of produced html files. 1.html, 2.html, 3.html..." src="https://user-images.githubusercontent.com/482817/196013122-d49b257d-f8e3-4427-9480-9cc5eb0d87d3.png">
</div>

Generated channel HTML files from the source videos

I also wanted the TV to have an old time-y feel and have a randomized amount of static between each channel. However, because I wasn’t going to use a frontend framework like React, I needed to somehow squeeze this in upon page load for each channel HTML page. 

In the jankiest fashion imaginable, I downloaded a [video of TV static](https://www.youtube.com/watch?v=NYWTlVD4vDs), and in my generation script, also included a `<video>` tag for just the static video. 

I then wrote a JavaScript file to be included via a `<script>` tag on every page that fast forwards to a randomized space in the TV static video, and plays it for a randomized length of time, up to 100 milliseconds. 

Maintaining state in an application for every channel was a little out of scope for the amount of time I had. To make up for this, I decided to make this presentation comedic in nature by randomizing the start time of videos on channels to make it feel more realistic…and to confuse me during my own presentation.

Here’s what the code ended up looking like for this part:

`scripts/play_video.js`

```jsx
/** 
 * The script that plays on every channel HTML page
 * to determine start times for static and channel videos
 **/
let video;
let static;
window.onload = () => {
  // Randomize where the static starts
  static = document.querySelector("#static");
  static.currentTime = static.duration * Math.random();

  // Randomize where the channel video starts
  video = document.querySelector("#channel");
  video.currentTime = video.duration * Math.random();
  
  // Keep the static playing for a random time up to 400ms
  setTimeout(() => {
    // Start playing the channel video after a random amount of time up to 100ms
    // Static will likely be overlayed over it with limited opacity for a good chunk of time
    setTimeout(() => {
      var playPromise = video.play();

      // In browsers that don’t yet support this functionality,
      // playPromise won’t be defined.
      if (playPromise !== undefined) {
        // For some reason, this is totally required
        // despite there being no functionality in either
        playPromise
          .then(function () {
            // Automatic playback started!
          })
          .catch(function (error) {
            // Automatic playback failed.
            // Show a UI element to let the user manually start playback.
          });
      }
    }, Math.random() * 100); 

    static.remove();
  }, Math.random() * 400);
};
```

`gen_channels.ts`

```tsx
/**
 * The script that generates channels (HTML files) from raw videos
 */
const fs = require("fs");

const CHANNELS_DIR = "./channels";
const VIDEOS_DIR = "./assets/videos";
const VIDEO_FILES = fs.readdirSync(VIDEOS_DIR);

const gen_channels = () => {
  VIDEO_FILES.forEach((file, i) => {
    const data = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'"
    />
    <link href="../styles.css" rel="stylesheet" />
    <script src="../assets/scripts/play_video.js"></script>
    <title>Channel ${i}</title>
  </head>
  <body>
    <div id="tv">      
      <!-- Channel does not autoplay...see play_video.js -->
      <video id="channel" preload="auto" data-setup="{}">
        <source src="../assets/videos/${file}" type="video/mp4" />
      </video>
      <!-- Autoplay the static to make it seem like a transition -->
      <video id="static" preload="auto" autoplay>
        <source src="../assets/effects/static.mp4" type="video/mp4" />
      </video>
    </div>
  </body>
</html>
`;
    fs.writeFileSync(`${CHANNELS_DIR}/${i}.html`, data);
  });
};

gen_channels();
```

### Creating a TV class

Now that we have channels, we’d have to create a way to navigate to channels!

I created a TypeScript class for the TV, aptly called `TV`.

This class is responsible for:

- Listening on the serial port for incoming messages
- Executing code in response to each type of message
- Loading new HTML files from the `channels` directory, or “changing the channel”, when clicking a channel up or down button
- Maintaining current channel state
- Increasing or decreasing volume when clicking the volume up or down buttons
- Muting when clicking the mute button
- Turning the TV “on” or “off” when clicking the left power button
- Closing the application window upon clicking the right power button

I don’t have much more to say about it, so here’s just the code with some comments!

`TV.ts`

```jsx
// This is my TV class
// It has language like a TV would and is responsible for 
// receiving messages and changing channels

import { SerialPort } from "serialport";
const loudness = require('loudness')

import { CHANNEL_FILES, CHANNELS_DIR } from "./utils";

// This is defined in the Arduino file!
enum ButtonPressed {
  CHANNEL_UP = "CHANNEL_UP",
  CHANNEL_DOWN = "CHANNEL_DOWN",
  POWER_BUTTON = "POWER_BUTTON",
  SUPER_POWER_BUTTON = "SUPER_POWER_BUTTON",
  VOLUME_UP = "VOLUME_UP",
  VOLUME_DOWN = "VOLUME_DOWN",
  MUTE = "MUTE",
}

export default class TV {
  static port: SerialPort;
  static window: Electron.BrowserWindow;
  
  static isOn = false;
  static channel = 0;
  
  static volume = 50;
  static muted = false;

  static initialize(
    path: string, // What port to listen to. In this case, which USB port.
    baudRate: number,
    window: Electron.BrowserWindow
  ) {
    TV.port = new SerialPort({ path, baudRate });
    TV.window = window;
    loudness.setVolume(TV.volume);

    // Switches the port into "flowing mode"
    TV.port.on("data", function (data) {
      const buttonPressed = data.toString().trim();
      switch (buttonPressed) {
        case ButtonPressed.CHANNEL_UP:
          TV.channel =
            TV.channel + 1 > CHANNEL_FILES.length - 1 ? 0 : TV.channel + 1;
          TV.changeChannel(TV.channel);
          break;
        case ButtonPressed.CHANNEL_DOWN:
          TV.channel =
            TV.channel - 1 < 0 ? CHANNEL_FILES.length - 1 : TV.channel - 1;
          TV.changeChannel(TV.channel);
          break;
        // My remote weirdly had two power buttons
        // One of them "turns the TV off" by playing an animation
        // Though it plays an OFF animation, the program is still running and can be
        // turned back on again.
        case ButtonPressed.POWER_BUTTON:
          TV.isOn ? TV.turnOff() : TV.turnOn();
          break;
        // The other kills the window completely, thus making it unresponsive to future
        // remote commands
        case ButtonPressed.SUPER_POWER_BUTTON:
          TV.port.close();
          TV.window.close();
        case ButtonPressed.VOLUME_UP:
          TV.volume += 15;
          loudness.setVolume(TV.volume);
          break;
        case ButtonPressed.VOLUME_DOWN:
          TV.volume -= 15;
          loudness.setVolume(TV.volume);
          break;
        case ButtonPressed.MUTE:
          TV.muted = !TV.muted;
          loudness.setMuted(!TV.muted);
          break;
        default:
      }
    });
  }

  static turnOn() {
		// These on and off files are nearly identical to the channel HTML files...
		// Just without additional staitc on top.
    TV.window.loadURL(`file://${__dirname}/../assets/turnon.html`).then(() => {
      setTimeout(() => TV.changeChannel(TV.channel), 600);
    });
    TV.isOn = true;
  }

  static changeChannel(index: number) {
    TV.window.loadURL(`file://${__dirname}/../${CHANNELS_DIR}/${index}.html`);
  }

  static turnOff() {
    TV.window.loadURL(`file://${__dirname}/../assets/turnoff.html`);
    TV.isOn = false;
  }
}
```

### Starting it up

Of course, just having a TV class isn’t good enough…we need to put the TV in a room to watch! 

By that, I mean we have to have it called by something else, notably a `main` function.

`main.ts`

```tsx
/**
 * Having a main method (and/or class) is common practice for Electron.
 * 
 */
import { BrowserWindow } from "electron";
import TV from "./TV";

export default class Main {
  static mainWindow: Electron.BrowserWindow;
  static application: Electron.App;
  static BrowserWindow;

  private static onWindowAllClosed() {
    if (process.platform !== "darwin") {
      Main.application.quit();
    }
  }

  private static onClose() {
    // Dereference the window object.
    Main.mainWindow = null;
  }

  private static onReady() {
    Main.mainWindow = new Main.BrowserWindow({
      fullscreen: true,
      darkTheme: true,
      webPreferences: {
        contextIsolation: true,
        nodeIntegration: false,
        webSecurity: false,
        autoplayPolicy: "no-user-gesture-required", // < --- moved to here
      },
      backgroundColor: "#000000",
    });
    // Uncomment for chrome dev tooling
    // Main.mainWindow.webContents.openDevTools();

    // Instead of loading an index file, load an off state
    Main.mainWindow.loadURL("file://" + __dirname + "/../assets/off.html");
    Main.mainWindow.on("closed", Main.onClose);
    // My USB port path and baud rate
    // If I weren't so lazy, I might have this path in a .env, but really I don't know what
    // anyone would do with this information. Would just make it nicer for others to use
    TV.initialize("/dev/cu.usbmodem14101", 9600, Main.mainWindow);
  }

  static main(app: Electron.App, browserWindow: typeof BrowserWindow) {
    // we pass the Electron.App object and the
    // Electron.BrowserWindow into this function
    // so this class has no dependencies. This
    // makes the code easier to write tests for
    app.commandLine.appendSwitch("autoplay-policy", "no-user-gesture-required");
    Main.BrowserWindow = browserWindow;
    Main.application = app;
    Main.application.on("window-all-closed", Main.onWindowAllClosed);
    Main.application.on("ready", Main.onReady);
  }
}
```

And lastly, we have to call our `main` method in our `app.ts` file, which is also an Electron (and many other framework) convention

```tsx
import { app, BrowserWindow } from "electron";
import Main from "./Main";

Main.main(app, BrowserWindow);
```

Easy!

# Final Product

There were a few other little things I didn’t mention, like the turning on and off animations, but with what’s above you should get a general view of what was done to make this project possible!

The video file is a too large for GitHub READMEs...even if I try to embed it from an external source, it just shows up [as a link](https://karinachowtime.com/videos/ir_receiver_final.mov). So you can see the video of the final product on Twitter instead :)

<center>
<a href="https://twitter.com/karomancer/status/1573610772843925504" target="_blank">
	<img alt="Picture of a post of the final video posted on Twitter." width="50%" src="https://user-images.githubusercontent.com/482817/197133771-f2c6b820-b133-4dfe-a7a1-e4b9b5b0307d.png" />	
</a>
	</center>

Unfortunately, I didn’t make a video of me doing the whole bit with the history as well, but if anyone really wanted that, I could maybe do it again!

I’m pretty proud of how this turned out! I spent a total of 14 hours on this project, from research to last lines of code (but not including writing this all up).

If I had infinite time, I’d love to implement overlays to show channel number and volume level, and support more remote functionality.
