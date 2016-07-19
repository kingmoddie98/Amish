# Makefile for Units program
#
# D.Provine

DESTDIR = /export/home/zimmer30/public_html/web/Amish/marquee
TARGETS = marquee1.jpg marquee2.jpg marquee3.jpg marquee4.jpg marquee5.jpg marquee6.jpg marquee7.jpg marquee8.jpg

all: $(TARGETS)

install: $(TARGETS)
	@if [ ! -d $(DESTDIR) ] ; then mkdir -p $(DESTDIR); fi
	@for f in $(TARGETS)               ; \
	do                                     \
		/usr/sbin/install -c $(DESTDIR) -m 444 $$f ; \
	done

deinstall:
	cd $(DESTDIR) ; /bin/rm -f $(TARGETS)
	@echo "   ==>   removed file(s): $(TARGETS)
	@echo "   ==>   left directory : $(DESTDIR)"

redo: deinstall install
