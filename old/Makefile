# Sample Makefile for Web Programming students
# by Darren Provine, 14 September 2002

# These lines should be the only ones you have to change for many
# projects. 

DESTDIR = /export/home/zimmer30/public_html/web/Amish/
 

SOURCES = Amish_test.html Supplies.html old_songs.m3u PleaseBeKind.mp3 Amish_Payment.html Amish.html poll_vote.php  Amish_info.html 2013Roster.html canvas.css webline.css fade.js war.html canvas.js\
   beard.png  projector.png amish.png AC.png W.png B.png M.png S.png black.png map.png


TARGETS = Amish_test.html Supplies.html old_songs.m3u PleaseBeKind.mp3 Amish_Payment.html Amish.html poll_vote.php Amish_info.html 2013Roster.html canvas.css  webline.css fade.js war.html canvas.js\
  beard.png  projector.png amish.png AC.png W.png B.png M.png S.png black.png map.png

DIRS = marquee

all: $(TARGETS)
        for d in $(DIRS) ; do (cd $$d ; make ) ; done

install: $(TARGETS)
        @if [ ! -d $(DESTDIR) ] ; then mkdir -p $(DESTDIR); fi
        @for f in $(TARGETS)               ; \
        do                                     \
                /usr/sbin/install -c $(DESTDIR) -m 444 $$f ; \
        done
        for d in $(DIRS) ; do (cd $$d ; make install ) ; done

deinstall:
        cd $(DESTDIR) ; /bin/rm -f $(TARGETS)
        @echo "   ==>   removed file(s): $(TARGETS)
        @echo "   ==>   left directory : $(DESTDIR)"
        for d in $(DIRS) ; do (cd $$d ; make deinstall ) ; done

redo: deinstall install
        for d in $(DIRS) ; do (cd $$d ; make redo ) ; done
