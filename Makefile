# Sample Makefile for Web Programming students
# by Darren Provine, 14 September 2002

# These lines should be the only ones you have to change for many
# projects. 

DESTDIR = /export/home/zimmer30/public_html/web/Amish/
 

SOURCES = Amish_test.html Supplies.html old_songs.m3u PleaseBeKind.mp3 Amish_Payment.html Amish.html poll_vote.php Amish_info.html 2013Roster.html canvas.css webline.css war.html canvas.js AjaxFunctions.js info.css al.mp4 supplies.css countdown.js ticker.js proverb.html\
check.png poster5.jpg poster6.jpg amish_people.jpg Buggy.png moonlight.mp3 sisters.mp3  poster4.jpg poster3.jpg daddy.mp3 radio.jpg beard.png  projector.png amish.png AC.png W.png B.png M.png S.png black.png map.png poster1.jpg poster2.jpg


TARGETS = Amish_test.html Supplies.html old_songs.m3u PleaseBeKind.mp3 Amish_Payment.html Amish.html poll_vote.php Amish_info.html al.mp4 2013Roster.html canvas.css webline.css war.html canvas.js AjaxFunctions.js info.css supplies.css countdown.js ticker.js proverb.html\
check.png poster5.jpg poster6.jpg amish_people.jpg Buggy.png moonlight.mp3 sisters.mp3 poster3.jpg poster4.jpg daddy.mp3 radio.jpg beard.png  projector.png amish.png AC.png W.png B.png M.png S.png black.png map.png poster1.jpg poster2.jpg

DIRS = marquee



EXES    = 

# These get installed mode 666.  Gak!
DBFILES = 



# This target is just here to be the top target in the Makefile.
# There's nothing to compile for this one.
all: $(TARGETS)

# You might want to look up mkdir(1) to see about that -p flag.
install: $(TARGETS) $(EXES)
	@if [ ! -d $(DESTDIR) ] ; then mkdir -p $(DESTDIR); fi
	@for f in $(TARGETS)                 ; \
	do                                     \
		/usr/sbin/install -c $(DESTDIR) -m 444 $$f ; \
	done
	@for f in $(EXES)                    ; \
	do                                     \
		/usr/sbin/install -c $(DESTDIR) -m 555 $$f ; \
	done
	@for f in $(DBFILES)                 ; \
	do                                     \
		/usr/sbin/install -c $(DESTDIR) -m 666 $$f ; \
	done

# Note that here we don't blow away the directory, and so we
# be sure and tell the user.  The reason not to delete the
# directory is that it may have other files in it.  Checking
# for, and deleting, any such files will have to be done manually.
# (How could this be improved?)
#
# Note also that the @ sign keeps the echo lines from being echoed
# before they are run.  (That could be confusing.)  This little
# trick (and many more) can be discovered by consulting make(1S).
deinstall:
	cd $(DESTDIR) ; /bin/rm -f $(TARGETS) $(EXES) $(DBFILES)
	@echo "   ==>   removed file(s): $(TARGETS) $(EXES) $(DBFILES)"
	@echo "   ==>   left directory : $(DESTDIR)"

redo: deinstall install

