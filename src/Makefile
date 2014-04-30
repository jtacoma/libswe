# $Header$
# this Makefie creates a SwissEph library and a swetest sample on HP-Unix 10.20
# It has also been used successfully on Suse Linix 5.3

# The mode marked as 'Linux' should also work with the GNU C compiler
# gcc on other systems. It is known to work with gcc on Solaris.

# If you modify this makefile for another compiler, please
# let us know. We would like to add as many variations as possible.
# If you get warnings and error messages from your compiler, please
# let us know. We like to fix the source code so that it compiles
# free of warnings.
# send email to swisseph@astro.ch
#

CFLAGS = -g -Wall -fPIC  	# for Linux and other gcc systems
OP=$(CFLAGS)  
CC?=cc	#for Linux

# compilation rule for general cases
.o :
	$(CC) $(OP) -o $@ $? -lm
.c.o:
	$(CC) -c $(OP) $<     

SWEOBJ = swedate.o swehouse.o swejpl.o swemmoon.o swemplan.o swepcalc.o sweph.o\
	swepdate.o swephlib.o swecl.o swehel.o
SWESRC = $(addsuffix .c,$(basename $(SWEOBJ)))
EMFLAGS = -s EXPORTED_FUNCTIONS="['_swe_set_ephe_path','_swe_julday','_swe_calc_ut','_swe_fixstar_ut','_swe_deltat','_swe_calc','_swe_fixstar','_swe_close','_swe_get_planet_name']"

swetest: swetest.o libswe.a
	$(CC) $(OP) -o swetest swetest.o -L. -lswe -lm

swemini: swemini.o libswe.a
	$(CC) $(OP) -o swemini swemini.o -L. -lswe -lm

# create an archive and a dynamic link libary fro SwissEph
# a user of this library will inlcude swephexp.h  and link with -lswe

libswe.a: $(SWEOBJ)
	ar r libswe.a	$(SWEOBJ)

libswe.so: $(SWEOBJ)
	$(CC) -shared -o libswe.so $(SWEOBJ)

clean:
	rm -f *.o swetest libswe*

libswe.post.js: swephexp.h
	echo "var Module;" > $@
	echo "if (typeof Module === "undefined") Module = {};" > $@
	grep '#.*define' $< | grep ' SE' \
		| sed -e 's/#.*define */Module["_/' \
		| sed -e 's/[ \t]\+/"] = /' \
		| sed -e 's/\<[A-Z][A-Z0-9_]*\>/Module["&"]/g' \
		| sed -e 's:[ \t]*\(/\*.*\)\?$$:;:' \
		>> $@

libswe.html: libswe.post.js
	$(CC) $(SWESRC) -o libswe.html \
	--post-js libswe.post.js \
	-s EXPORTED_FUNCTIONS=@`pwd`/EXPORTED_FUNCTIONS.js

libswe.js: libswe.post.js
	$(CC) $(SWESRC) -o libswe.js \
	--post-js libswe.post.js \
	-s EXPORTED_FUNCTIONS=@`pwd`/EXPORTED_FUNCTIONS.js
	
###
swecl.o: swejpl.h sweodef.h swephexp.h swedll.h sweph.h swephlib.h
sweclips.o: sweodef.h swephexp.h swedll.h
swedate.o: swephexp.h sweodef.h swedll.h
swehel.o: swephexp.h sweodef.h swedll.h
swehouse.o: swephexp.h sweodef.h swedll.h swephlib.h swehouse.h
swejpl.o: swephexp.h sweodef.h swedll.h sweph.h swejpl.h
swemini.o: swephexp.h sweodef.h swedll.h
swemmoon.o: swephexp.h sweodef.h swedll.h sweph.h swephlib.h
swemplan.o: swephexp.h sweodef.h swedll.h sweph.h swephlib.h swemptab.c
swepcalc.o: swepcalc.h swephexp.h sweodef.h swedll.h
sweph.o: swejpl.h sweodef.h swephexp.h swedll.h sweph.h swephlib.h
swephlib.o: swephexp.h sweodef.h swedll.h sweph.h swephlib.h
swetest.o: swephexp.h sweodef.h swedll.h
