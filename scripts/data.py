import json
import random
import nltk

def clean(l):
  l = list(set(l))
  random.shuffle(l)
  return l

def good_word(w):
  return w.isalpha() and w[-1:] is not 's'

def get_words_by(words, part):
  typed_words = [a[0].lower() for a in words if a[1] == part and good_word(a[0])]
  return clean(typed_words)

def main():
  words = nltk.corpus.brown.tagged_words(simplify_tags=True)

  print json.dumps({
      'nouns': get_words_by(words, 'N'),
      'adjs': get_words_by(words, 'ADJ')
    })

main()
