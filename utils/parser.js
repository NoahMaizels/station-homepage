// let htmlToJson = require('html-to-json')
// let TwitterTweetEmbed = require('react-twitter-embed').TwitterTweetEmbed

let HtmlToReactParser = require('html-to-react').Parser
let testString = '<h2 id="a-few-things-you-should-know"><strong>A few things you should know</strong></h2><p></p><figure class="kg-card kg-embed-card"><blockquote class="twitter-tweet"><p lang="en" dir="ltr">I&#39ve seen more attention placed on Multiparty Computation and Threshold Sharing Schemes recently, so I thought I&#39d re-share my old article about those topics. They can be a bit tricky, I hope this makes them easier:<a href="https://t.co/kXCN4pXcQU">https://t.co/kXCN4pXcQU</a></p>&mdash Noah (@noahniuwa) <a href="https://twitter.com/noahniuwa/status/1299490418749566977?ref_src=twsrc%5Etfw">August 28, 2020</a></blockquote>\n' + '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\n' + '</figure><p>sfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd random</p><figure class="kg-card kg-embed-card"><blockquote class="twitter-tweet"><p lang="en" dir="ltr">We lied, we leaked, and we streamed to the hot tub category on Twitch almost unironically. Here&#39s a teasy teaser for one of the upcoming weapons. Spoiler it&#39s not one of the weapons we&#39ve shown earlier. Wonder what it is? <a href="https://t.co/uksBB51Y3z">pic.twitter.com/uksBB51Y3z</a></p>&mdash Deep Rock Galactic (@JoinDeepRock) <a href="https://twitter.com/JoinDeepRock/status/1397913205448396801?ref_src=twsrc%5Etfw">May 27, 2021</a></blockquote>\n' + '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\n' + '</figure><p>randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd random</p><figure class="kg-card kg-embed-card"><blockquote class="twitter-tweet"><p lang="en" dir="ltr">We lied, we leaked, and we streamed to the hot tub category on Twitch almost unironically. Here&#39s a teasy teaser for one of the upcoming weapons. Spoiler it&#39s not one of the weapons we&#39ve shown earlier. Wonder what it is? <a href="https://t.co/uksBB51Y3z">pic.twitter.com/uksBB51Y3z</a></p>&mdash Deep Rock Galactic (@JoinDeepRock) <a href="https://twitter.com/JoinDeepRock/status/1397913205448396801?ref_src=twsrc%5Etfw">May 27, 2021</a></blockquote>\n' + '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\n' + '</figure><p>domsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsv</p><figure class="kg-card kg-embed-card"><blockquote class="twitter-tweet"><p lang="en" dir="ltr">Any good guesses on what this is? It&#39s not what we&#39re planning on revealing during the dev stream tomorrow, that&#39s for sure. <a href="https://t.co/G6lXdKOlIB">https://t.co/G6lXdKOlIB</a></p>&mdash Deep Rock Galactic (@JoinDeepRock) <a href="https://twitter.com/JoinDeepRock/status/1400013726984675333?ref_src=twsrc%5Etfw">June 2, 2021</a></blockquote>\n' + '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\n' + '</figure><p>domsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfsfdgfsdsgfdfdsgd randomsfffggfs</p><p></p>'
var htmlToReactParser = new HtmlToReactParser()
var reactElements = htmlToReactParser.parse(testString)
let newElements = reactElements.map((element) => {
  let returnVal
  if (element.type !== 'figure') {
    return element
  } else {
    element.props.children.forEach((child) => {
      if (child.type === 'blockquote') {
        console.log(child.props.children[2].props.href)
        // console.log(child)
        if (child.props.children[2].props.href.slice(0, 19) === 'https://twitter.com') {
          returnVal = 23
        } else {
          returnVal = element
        }
      }
    })
  }
  return returnVal
})
console.log(newElements)
