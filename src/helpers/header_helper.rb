module HeaderHelper
  
  def section_header(title, key=nil)
    key = urlify(title) unless key
    tag(:h2) {
      img("#{key}_banner.png", :alt => '', :width => 85, :height => 64) +
      title
    }
  end
  
end
