module HeaderHelper
  
  def section_header(title, key=nil)
    key = urlify(title) unless key
    tag(:h2) {
      img("#{key}_banner.png", :alt => '', :width => 85, :height => 64) +
      title
    }
  end
  
  def index_js()
    return <<-HTML
      <script type='text/javascript'>
        $(document).ready(function() {
            $('#if_i_were_human_div').hide();
            $('#run_away_div').hide();
            $('#this_possible_love_div').hide();
            

            $('a#if_i_were_human').click(function() {
              $('#if_i_were_human_div').toggle(400);
              return false;
            });  


            $('a#run_away').click(function() {
              $('#run_away_div').toggle(400);
              return false;
            });


            $('a#this_possible_love').click(function() {
              $('#this_possible_love_div').toggle(400);
              return false;
            });
            $("#if_i_were_human_player").jmp3({
              filepath: "music/if%20i%20were%20human.mp3",
              width: 200,
              showdownload: "true"

            });

          });
      </script>
    HTML
  end

end
