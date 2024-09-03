To set the stage, it was my senior year and I was a bigger nerd than ever. Since the successful launches of my prior two iOS apps, I was more motivated to dig into a project than ever before. By this time, I also started developing my personal website, learning to program Arduino microcontrollers, exploring batch & shell scripting, and I had joined the school’s robotics team. I was pretty much living on cloud nine.

### 3 Days

Then came a challenge: a teacher on the homecoming committee inquired of me about building an app for the alumni school tour. Unlike my other more-sophisticated projects, this one had a deadline, and a relatively short one, at that.

3 days: that was the amount of time I had to build the initial version of the app.

### New Techniques

The app, being a tour of the school, meant that it had 20+ nearly identical pages, each one for a stop on the tour. The pages would have their own image and text, but the structure and application flow were essentially the same between them. In true programmer fashion, I decided I would try out a “new-to-me” technique of dynamically populating relevant content into the view. The benefit would be avoiding hardcoding every tour spot, which would have likely taken me even longer to develop and finalize than the dynamic view controller. The single dynamic view also enabled me to iron out the bugs in navigation all at once, rather than needing to fix the same bugs across views for all 22 tour stops.

The concept of a dynamically populated view [hopefully doesn’t sound too foreign](https://react.dev/learn/passing-props-to-a-component) to most. It’s an important concept that enables all kinds of [DRY](https://en.wikipedia.org/wiki/Don't_repeat_yourself) code and powerful APIs. But for me in 2015, it was no small feat.

The solution can be boiled down to these few lines (simplified for readability). Again, this should look fairly ordinary to an experienced developer.

```swift
let fetchRequest = NSFetchRequest(entityName: "TourSpot")
fetchRequest.predicate = NSPredicate(format: "slideNumber == %d", self.slideNumber)
let tourSlide = moc.fetch(fetchRequest)[0]

self.title = tourSlide.title
self.info = tourSlide.info
self.image = UIImage(data: tourSlide.image)

if (Int(slideNumber) + 1) != totalSlides {
  // in the full source, this button calls a function to increment self.slideNumber
	navbar.rightBarButtonItem = UIBarButtonItem(title: "Next", style: .plain)
} else {
  navbar.rightBarButtonItem = UIBarButtonItem(title: "The End", style: .done)
}
```

With this, I used a small local database preloaded with all of the content and accessed it on demand.

<div class="multiColumn">
<div class="centeredImage">
<img alt="Screenshot of the GV Gold Tour home screen" src="/img/projects/gvgold1.jpg" />
</div>
<div class="centeredImage">
<img alt="Screenshot of the GV Gold Tour instructions screen" src="/img/projects/gvgold2.jpg" />
</div>
<div class="centeredImage">
<img alt="Screenshot of the GV Gold Tour auditorium stop" src="/img/projects/gvgold3.jpg" />
</div>
<div class="centeredImage">
<img alt="Screenshot of the GV Gold Tour pride wall stop" src="/img/projects/gvgold4.jpg" />
</div>
</div>
